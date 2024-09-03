import { ArticleProps, ProjectProps } from "@/src/types/types";
import Link from "next/link";
import { Badge } from "./badge";
import ImageBox from "./ImageBox";



export default function ContentCard({ content }: { content: ArticleProps | ProjectProps }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl xl:text-4xl">{content.title}</h2>
      <ImageBox 
      classesWrapper="aspect-[16/9] xl:h-[350px]"
      image={content.coverImage} />
      <p>{content.description}</p>
      <div className="flex flex-wrap gap-1.5 ">

    {content.tags?.map((tag,index)  => (
        <Badge key={index} className=" rounded-md" >{tag}</Badge>
        ))}
      </div>
      {content._type === 'article' ? (
        <Link href={`/blog/${content.slug}`} passHref>
          Read More
        </Link>
      ) : (
        <Link href={`/works/${content.slug}`} passHref>
         Read More
        </Link>
      )}
    </div>
  );
}