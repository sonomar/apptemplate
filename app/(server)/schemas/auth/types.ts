import { TypeOf } from 'zod';
import { loginSchema } from './schema';

export type LoginSchema = TypeOf<typeof loginSchema>