import { TypeOf } from 'zod';
import { createUserSchema } from './schema';

export type CreateUserSchema = TypeOf<typeof createUserSchema>;