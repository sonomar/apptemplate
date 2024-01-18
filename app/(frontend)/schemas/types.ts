import { TypeOf } from 'zod';
import { loginFormSchema } from '.';

export type LoginFormSchema = TypeOf<typeof loginFormSchema>;