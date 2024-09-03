import ContentCard from "@/src/components/ui/articlecard";
import { PagesProps   } from "@/src/types/types";

export default function PageLayout({ page }: { page: PagesProps }) {
  return (
    <div className="w-full flex flex-col">
      <div className="max-w-screen-xl mx-auto w-full flex flex-col gap-12">
        <div className="max-w-fit flex flex-col gap-5">
          <h2 className="text-6xl xl:text-8xl">{page.title}</h2>
          <hr />
          <p>{page.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
          {page.contents?.map((content) => {
            if(!content){
                return null;
            }
           return <ContentCard key={content._id} content={content} />
          })}
        </div>
      </div>
    </div>
  );
}

