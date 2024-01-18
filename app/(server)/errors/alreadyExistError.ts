import { ApiError } from '@/app/(server)/utils/apiError';

export class alreadyExistError extends ApiError {
    constructor() {
        super(409, 'item already exist at given coordinates');
    }
}