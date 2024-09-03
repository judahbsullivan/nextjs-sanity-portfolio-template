import { HomePageProps } from "@/src/app/(Website)/page"
import { CustomPortableText } from "@/src/components/blocks/CustomPortableText"
import Card from "@/src/components/ui/card"




export default function HomePageLayout({home}:HomePageProps ){
    return(
        <div >
           <div className="max-w-screen-xl items-center  justify-center mx-auto w-full flex flex-col gap-12">
                <div className="max-w-fit flex flex-col gap-5">
                <h2 className="text-6xl xl:text-8xl">{home.title}</h2>
                <hr />
                <p className="text-lg">{home.description}</p>
                </div>
                <div className=" mx-auto gap-y-2 flex-1 gap-x-3 w-full grid  max-w-4xl place-self-center grid-cols-2 md:grid-cols-3 ">
 {
                    Array.from({length: 6}).map((_,i) =>(
                <Card 
                key={i}
                title="This is the title"
                description="here is the description of the technology"
                image="https://github.com/shadcn.png"
                tech="Framework"
                />
 
                    ))
                }
                </div>
               
               <article className="prose prose-xl prose-p:text-primary max-w-screen-xl mx-auto w-full ">
                    {home.overview && (
                    <CustomPortableText  value={home?.overview} paragraphClasses="text-lg"/>
                    )}
                </article>
        </div>
        </div>
    )
} 