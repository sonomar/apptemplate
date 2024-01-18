import { prisma } from '@/app/shared/lib/prisma';
import { testAddress, Prisma } from '@prisma/client';
import { alreadyExistError, notFoundError } from '@/app/(server)/errors';

export const getAddress = async (ID: string): Promise<testAddress> => {
    const address = await prisma.testAddress.findFirstOrThrow({
        where: {
            ID,
        }
    });

    if (!address) throw new notFoundError();

    return { ...address };
};

export const getAllAddresses = async (): Promise<testAddress[]> => {
    const addresses = await prisma.testAddress.findMany({
    });

    if (!addresses) throw new notFoundError();

    return { ...addresses };
};
