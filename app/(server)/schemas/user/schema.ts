import { object, string } from 'zod';

export const createUserSchema = object({
    body: object({
        name: string({ required_error: 'name is required' }),
        email: string({ required_error: 'email is required' }).email('invalid email'),
        password: string({ required_error: 'password is required' }).min(8, "Password must be at least 8 characters"),
    }),
});