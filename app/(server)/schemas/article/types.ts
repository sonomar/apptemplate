import { TypeOf } from 'zod';
import { createArticleSchema } from './schema';

export type CreateArticleSchema = TypeOf<typeof createArticleSchema>;