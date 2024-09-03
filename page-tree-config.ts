import { PageTreeConfig } from '@q42/sanity-plugin-page-tree';
import { apiVersion } from './sanity/env';

export const pageTreeConfig: PageTreeConfig = {
  rootSchemaType: 'home',
  pageSchemaTypes: ['home', 'page','article','project'],
  apiVersion,
  titleFieldName: 'title',
  baseUrl: "https://nextjs-sanity-portfolio-template.vercel.app/"
};