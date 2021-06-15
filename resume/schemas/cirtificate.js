// eslint-disable-next-line import/no-anonymous-default-export
export default{
  name: 'cirtificate',
  title: 'Cirtificate',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
        name: 'institute',
        title: 'Institute',
        type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
  ],

  preview: {
    select: {
      title: 'title',
      institute: 'institute.name',
      media: 'mainImage',
    },
    
  },
}