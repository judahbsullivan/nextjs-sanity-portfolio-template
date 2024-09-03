
import { defineField, defineType } from 'sanity';






export default defineType({
    name: 'cardItem',
    title: 'Card Item',
    type: 'object',
    description: 'You can use this to display a grid of tech cards',
    fields:[
        defineField({
            name: 'title',
            type: 'string'
        }),
defineField({
            name: 'description',
            type: 'string'
        }),
  defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'badge',
        type: 'string'
    }),
    defineField({
        name: 'link',
        type: 'string'
    }),
    ],
})