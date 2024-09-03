import {  defineField, defineType } from 'sanity';
import {  definePageType } from '@q42/sanity-plugin-page-tree';
import { pageTreeConfig } from '../../../page-tree-config';

const _projectType = defineType({
  name: 'project',
  type: 'document',
  title: 'Project Case Study',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
     defineField({
      name: "date",
      title: "Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
     defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
     defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    
  ],
});

export const project = definePageType(_projectType, pageTreeConfig);
