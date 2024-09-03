import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { PageMetadata } from '@q42/sanity-plugin-page-tree/next';
import Page from './page';
import ArticlePage from './article';
import ProjectPage from './project';



interface PageHandlerProps  {
  pageMetadata: PageMetadata;
};




export default async function SiteHandler({ pageMetadata }: PageHandlerProps)  {
  switch (pageMetadata.type) {
    case 'page': {
      const page =
       await client.fetch<any>(`
       *[_id == $id][0]{
        ...,
        "contents": *[_type in ["article", "project"] && references(^._id)]{
          ...,
           title,
        description,
        "slug": slug.current,
        _id,
        coverImage,
        tags
        }
      }`, { id: pageMetadata._id });

      if (!page) {
        return notFound();
      }
      return <Page page={page}/> 

    }
case 'article': {
      const article =
       await client.fetch<any>(`
       *[_id == $id][0]{
        title,
        description,
        _id,
        coverImage,
        tags
      }`, { id: pageMetadata._id });

      if (!article) {
        return notFound();
      }
      return <ArticlePage article={article}/> 
    }
case 'project': {
      const project =
       await client.fetch<any>(`
       *[_id == $id][0]{
title,
        description,
        _id,
        coverImage,
        tags
      }`, { id: pageMetadata._id });

      if (!project) {
        return notFound();
      }
      return <ProjectPage project={project}/> 
    }
  }

};