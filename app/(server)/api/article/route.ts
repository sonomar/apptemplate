import { errorHandler } from '@/app/(server)/utils/errorHandler';
import { createArticleSchema } from '@/app/(server)/schemas/article';
import { createArticle } from '@/app/(server)/lib/article';
import { getArticlesByAuthor } from '@/app/(server)/lib/article';
import { NextRequest, NextResponse } from 'next/server';

// create article request
export const POST = async (req: NextRequest) => {
    try {
        const requestQuery = Object.fromEntries(req.nextUrl.searchParams.entries());
        const { authorId } = createArticleSchema.shape.query.parse(requestQuery);
        const request = createArticleSchema.parse(req);

        const {
            body: { title, description, body, published },
        } = request;

        const planet = await createArticle(title, published, authorId, description ? description : 'no description', body ? body : 'no body');

        return NextResponse.json({ data: planet }, { status: 201 });
    } catch (error) {
        return errorHandler(error);
    }
};