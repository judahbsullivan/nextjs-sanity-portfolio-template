import type { PortableTextBlock } from "next-sanity";
import type { Image } from "sanity";

export interface HomeProps{

    title?: string;
      overview?: PortableTextBlock[]
    description?: string;

}



export interface PagesProps{
    title?: string;
    description?: string;
    contents?: (ArticleProps | ProjectProps)[]

}

export interface SanityImage{


}


export  interface ArticleProps{
    _type?: 'article';
    _id: string;
    coverImage: Image;
    title?: string;
    description: string;
    tags?: string[];
    slug: Slug
}

export interface ProjectProps{
    _type?: 'project';
    _id: string;
    title?: string;
    coverImage: Image;
    tags?: string[];
    description: string;
    slug?: Slug
}



interface Slug{
    current: string;
}

export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export interface SettingsPayload {
  menuItems?: MenuItem[]
  ogImage?: Image 
}

export function isArticleProps(object: any): object is ArticleProps{return object._type === 'article' }
export function isProjectProps(object: any): object is ArticleProps{return object._type === 'project' }