import { ApiError } from '@/app/(server)/utils/apiError';

export class WrongCredentialsError extends ApiError {
    constructor() {
        super(401, 'invalid email or password');
    }
}