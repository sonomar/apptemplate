import { getArticlesByAuthor } from "@/app/(server)/lib/article";
import { config } from "@/app/(server)/utils/helpers";
import { Article, User } from "@prisma/client";
import { getServerSession } from "next-auth";

const Main = async() => {
    const session = await getServerSession(config)
    const authorArticles = await getArticlesByAuthor((session?.user as User).id)
    console.log(session);
    console.log((session?.user as any).id);
    return (
            <>
                <div>
                    <p>You are logged in!</p>
                </div>
                <p>
                        {
                            authorArticles.map((article:Article) => {
                                return <p key={article.title}>{article.title}</p>
                            })
                        }
                </p>
            </>
    );
};

export default Main;