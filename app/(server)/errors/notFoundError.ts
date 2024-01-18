import { ApiError } from '@/app/(server)/utils/apiError';

export class notFoundError extends ApiError {
    constructor() {
        super(409, 'item not found');
    }
}