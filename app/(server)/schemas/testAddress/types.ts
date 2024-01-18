import { TypeOf } from 'zod';
import { createtestAddressSchema } from './schema';

export type CreatetestAddressSchema = TypeOf<typeof createtestAddressSchema>;