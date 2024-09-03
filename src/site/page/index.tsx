import { PagesProps } from "@/src/types/types";
import PageLayout from "./PageLayout";



export interface PageProps {
    page: PagesProps 

}


export default function Page({page}: PageProps){
    return <PageLayout page={page}/>
}