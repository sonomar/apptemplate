import { NextResponse } from 'next/server';
import { ApiError } from '@/app/(server)/utils/apiError';
import { ZodError } from 'zod';

export const errorHandler = (error: unknown | ApiError | ZodError) => {
    if (error instanceof ApiError) {
        const { status, message } = error;

        return NextResponse.json({ data: { message } }, { status });
    }

    if (error instanceof ZodError) {
        return NextResponse.json(
            {
                data: {
                    message: 'input validation failed',
                    errors: error.issues.map((issue) => issue.message),
                },
            },
            { status: 400 },
        );
    }

    return NextResponse.json({ data: { message: 'something went wrong' } }, { status: 500 });
};