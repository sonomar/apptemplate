import { WrongCredentialsError } from '@/app/(server)/errors';
import { errorHandler } from '@/app/(server)/utils/errorHandler';
import { loginSchema } from '@/app/(server)/schemas/auth';
import { prisma } from '@/app/shared/lib/prisma';
import { NextResponse } from 'next/server';

// sample login endpoint
export const POST = async (req: Request) => {
    try {
        const request = loginSchema.parse(req);

        const {
            body: { email, password },
        } = request;

        const user = await prisma.user.findUnique({
            where: { email: email },
            select: {
                id: true,
                email: true,
                password: true,
            },
        });

        if (!user) throw new WrongCredentialsError();

        const isCorrectPassword = user.password === password;

        if (!isCorrectPassword) throw new WrongCredentialsError();

        return NextResponse.json({ data: { ...user, password: undefined } }, { status: 201 });
    } catch (error) {
        return errorHandler(error);
    }
};