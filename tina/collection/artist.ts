import type { Collection } from "tinacms";
import { expertSeoPageProps } from "./seo";
import { Value } from "sass";

const Artist: Collection = {
  label: "Artist",
  name: "artist",
  path: "content/artists",
  match: {
    exclude: '**/**/index',
  },
  indexes:[{
    name : 'date-name',
    fields: [
      {name:'date'},
      {name:'name'}
    ]
  }],
  format: "md",
  fields: [
    {
      type: 'datetime',
      label: 'Date de Passage',
      name: 'date',
      ui: {
        dateFormat: 'YYYY',
      }
    },
    {
      type: "string",
      label: "Name",
      name: "name",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      label: "Image De Presentation",
      name: "img",
    },
    {
      label: "Boutton",
      name: "actions",
      type: "object",
      list: true,
      ui: {
        defaultItem: {
          label: "En savoir plus",
          type: "button",
          icon: false,
          link: "/",
        },
        itemProps: (item) => ({ label: item.label }),
      },
      fields: [
        {
          label: "Titre",
          name: "label",
          type: "string",
        },
        {
          label: "Type",
          name: "type",
          type: "string",
          options: [
            { label: "Bouton", value: "button" },
            { label: "Lien", value: "link" },
          ],
        },
        {
          label: "Icon",
          name: "icon",
          type: "boolean",
        },
        {
          label: "Lien",
          name: "link",
          type: "string",
        },
      ],
    },
    {
        type: "rich-text",
        label: "Description",
        name: "children",
    },
  ],
};
const ArtistSEO: Collection = {
  label: "Artist SEO",
  name: "artistSeo",
  path: "content/artists",
  match: {
    include: '**/**/index',
  },
  format: "md",
  ui: {
    allowedActions: {
      create: false,
      delete:false,
    }
  },
  fields: [
    expertSeoPageProps,
  ],
};

export {Artist, ArtistSEO};
