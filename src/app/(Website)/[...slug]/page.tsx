import { notFound } from 'next/navigation';
import { pageTreeClient } from '@/page-tree-cli';
import SiteHandler from '@/src/site';

interface  SiteProps  {
  params: {
    slug: string[];
  };
}

export default async function Site({ params }: SiteProps)  {
  const path = params.slug ? "/" + params.slug?.join('/') : '/';
  const pageMetadata = await pageTreeClient.getPageMetadataByPath(path);

  if (!pageMetadata) {
    return notFound();
  }

  return <SiteHandler pageMetadata={pageMetadata}  />;
};
