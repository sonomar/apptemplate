import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/app/shared/lib/prisma';
import * as bcrypt from 'bcrypt';
import NextAuth from 'next-auth/next';
import { config } from '@/app/(server)/utils/helpers';

const confirmPasswordHash = async (plainPassword:string, hashedPassword:string) => {
    return await bcrypt.compare(plainPassword, hashedPassword);
}

const options: AuthOptions = config
const handler = NextAuth(options);

export { handler as GET, handler as POST };
