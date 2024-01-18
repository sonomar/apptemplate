import { object, string, boolean, number } from 'zod';

const authorId = string({ required_error: 'author id is required' });

export const createArticleSchema = object({
    query: object({ authorId }).strict(),
    body: object({
        title: string({ required_error: 'title is required' }),
        description: string().optional(),
        body: string().optional(),
        published: boolean({ required_error: 'publishing status is required' }),
        authorId: string({ required_error: 'userId is required' }),
    }),
});