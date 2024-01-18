import { object, string, number, date, boolean } from 'zod';

export const createtestAddressSchema = object({
    body: object({
        SUCH: string().optional(),
        A1: string().optional(),
        A2: string().optional(),
        A3: string().optional(),
        STRASSE: string().optional(),
        LAND: string().optional(),
        PLZ: string().optional(),
        ORT: string().optional(),
        TELEFON1: string().optional(),
        TELEFON2: string().optional(),
        TELE_ZENT: number().int().optional(),
        FUNKTELE: string().optional(),
        PRIVATTEL: string().optional(),
        TELEFAX1: string().optional(),
        TELEFAX2: string().optional(),
        FUNKTION: string().optional(),
        TITEL: string().optional(),
        VORNAME: string().optional(),
        NACHNAME: string().optional(),
        FIRMA: string().optional(),
        POSITION: string().optional(),
        ANSPRECH: string().optional(),
        ANREDE: string().optional(),
        ZUSATZ: string().optional(),
        NOTIZEN: string().optional(),
        AENDERUNGS: string().optional(),
        KATALOGVER: number().int().optional(),
        EMAIL: string().optional(),
    }),
});


