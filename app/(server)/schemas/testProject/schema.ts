import { object, string, number, date } from 'zod';

export const createtestProjectSchema = object({
    body: object({
        NUMMER: string({ required_error: 'nummber is required' }),
        JAHR:  number().int().optional(),
        VERTRAGNR: number().int().optional(),
        KLIENT: string().optional(),
        KURZEL: string().optional(),
        PRODUKTION: string().optional(),
        SENDER: string().optional(),
        ADATUM: string().optional(),
        VDATUM: string().optional(),
        A1: string().optional(),
        TA1: string().optional(),
        A2: string().optional(),
        TA2: string().optional(),
        A3: string().optional(),
        TA3: string().optional(),
        A4: string().optional(),
        TA4: string().optional(),
        TITEL: string().optional(),
        REGIE: string().optional(),
        ROLLE: string().optional(),
        PARTNER: string().optional(),
        XY: string().optional(),
        TAGE: string().optional(),
        PBDATUM: string().optional(),
        PDATUM: string().optional(),
        TERMINE: string().optional(),
        ODATUM: string().optional(),
        ZEITRAUM: string().optional(),
        VERMERK: string().optional(),
        PROVISION: number().optional(),
        PROV2: string().optional(),
        NOTIZ: string().optional()
    }),
});


