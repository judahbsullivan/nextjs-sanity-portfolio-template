import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'cards',
  title: 'Card',
  type: 'object',
  fields: [
    {
      name: 'items',
      title: 'Items',
      description:
        "Allows for creating a number of timelines (max 2) for displaying in the page's body",
      type: 'array',
      validation: (Rule) => Rule.max(2),
      of: [
        {
          name: 'item',
          title: 'Item',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            {
              name: 'cardItems',
              title: 'Card Items',
              type: 'array',
              of: [
                defineField({
                  name: 'cardItem',
                  title: 'Card Item',
                  type: 'cardItem',
                }),
              ],
            },
          ],
         },
      ],
    },
  ],
 })