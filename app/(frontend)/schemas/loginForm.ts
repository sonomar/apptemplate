import { object, string } from 'zod';

export const loginFormSchema = object({
    email: string({ required_error: 'email is required' }).email('invalid email'),
    password: string({ required_error: 'password is required' }),
}).strict();