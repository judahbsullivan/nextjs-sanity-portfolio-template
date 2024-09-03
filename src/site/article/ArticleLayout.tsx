import { ArticlePageProps } from './index';
import { Badge } from '@/src/components/ui/badge';
import ImageBox from '@/src/components/ui/ImageBox';





export default function ArticleLayout({article}: ArticlePageProps){
    console.log(article)
    return (
    <div className="max-w-screen-xl w-full mx-auto ">
        <div className="flex flex-col gap-5">
            <div className="max-w-fit flex flex-col gap-5">
<h2 className='text-6xl xl:text-8xl'>
        {article?.title}
            </h2>
            <hr />
 <div  className="flex items-center gap-2.5 flex-wrap  ">
  {article?.tags?.map((tag,key) => (
        <Badge 
        className="rounded-md text-md"
         key={key}>{tag}</Badge>
  ))}
    </div>
            </div>
            <ImageBox
             image={article?.coverImage}
              alt={article?.title}        
               classesWrapper="aspect-[16/9]"
  />
            <p className='text-lg'>{article?.description}</p>
        </div>
    </div>
    )
}