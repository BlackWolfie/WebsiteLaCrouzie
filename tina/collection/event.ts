import type { Collection } from "tinacms";
import { expertSeoPageProps } from "./seo";

const Event: Collection = {
  label: "Evenements",
  name: "event",
  path: "content/events",
  format: "mdx",
  match: {
    exclude: '**/**/index',
  },
  ui: {
    router: ({ document }) => {
      return `/events/${document._sys.filename}`;
    },
  },
  fields: [
    expertSeoPageProps,
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

const EventsSEO: Collection = {
  label: "Evenements SEO",
  name: "EventsSeo",
  path: "content/events",
  match: {
    include: '**/**/index',
  },
  ui: {
    allowedActions: {
      create: false,
      delete:false,
    }
  },
  format: "md",
  fields: [
    expertSeoPageProps,
  ],
};

export default Event;
