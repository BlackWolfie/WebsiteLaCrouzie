import type { Collection } from "tinacms";

const Artist: Collection = {
  label: "Artist",
  name: "artist",
  path: "content/artists",
  format: "md",
  fields: [
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
export default Artist;
