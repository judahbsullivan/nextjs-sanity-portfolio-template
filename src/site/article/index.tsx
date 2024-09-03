import { ArticleProps } from "@/src/types/types"
import ArticleLayout from "./ArticleLayout";




export interface ArticlePageProps {
    article?: ArticleProps;
}


export default function ArticlePage ({article}: ArticlePageProps){
    return <ArticleLayout article={article}/> 
}