import { prisma } from '@/app/shared/lib/prisma';
import { testProject, Prisma } from '@prisma/client';
import { alreadyExistError, notFoundError } from '@/app/(server)/errors';

export const getProject = async (NUMMER: number): Promise<testProject> => {
    const project = await prisma.testProject.findFirstOrThrow({
        where: {
            NUMMER,
        }
    });

    if (!project) throw new notFoundError();

    return { ...project };
};

export const getAllProjects = async (): Promise<testProject[]> => {
    const projects = await prisma.testProject.findMany({
    });

    if (!projects) throw new notFoundError();

    return { ...projects };
};
