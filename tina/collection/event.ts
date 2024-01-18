import type { Collection } from "tinacms";

const Event: Collection = {
  label: "Evenements",
  name: "event",
  path: "content/events",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      return `/events/${document._sys.filename}`;
    },
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      name: "heroImg",
      label: "Affiche",
    },
    {
      type: "rich-text",
      label: "Extrait",
      name: "excerpt",
    },
    {
      type: 'object',
      label: "Artistes",
      name: "artists",
      list: true,
      fields:[
        {
            type: 'reference',
            label: 'Artiste',
            name: 'artist',
            collections: ['artist'],
        }
      ]
    },
    {
      type: "datetime",
      label: "Date de debut",
      name: "date",
      ui: {
        dateFormat: "MMMM DD YYYY",
        timeFormat: "hh:mm A",
      },
    },
    {
        type: "datetime",
        label: "Date de fin",
        name: "datef",
        ui: {
          dateFormat: "MMMM DD YYYY",
          timeFormat: "hh:mm A",
        },
    },
    {
        type: "rich-text",
        label: "Programme",
        name: "program",
    },
    {
      type: "rich-text",
      label: "Body",
      name: "_body",
      templates: [
        {
          name: "BlockQuote",
          label: "Block Quote",
          fields: [
            {
              name: "children",
              label: "Quote",
              type: "rich-text",
            },
            {
              name: "authorName",
              label: "Author",
              type: "string",
            },
          ],
        },
      ],
      isBody: true,
    },
  ],
};

export default Event;
