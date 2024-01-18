import { TypeOf } from 'zod';
import { createtestProjectSchema } from './schema';

export type CreatetestProjectSchema = TypeOf<typeof createtestProjectSchema>;