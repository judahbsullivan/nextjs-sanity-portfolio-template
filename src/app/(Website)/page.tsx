import { client } from "@/sanity/lib/client"
import HomePageLayout from "@/src/site/home/HomeLayout"
import { HomeProps } from "@/src/types/types"





export interface HomePageProps{
    home: HomeProps
}



export default async function Home(){
   const home = await client.fetch<HomeProps>(`*[_type == 'home'][0]{title,description, overview}`) 




    return <HomePageLayout home={home}/>
}