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
        type: "rich-text",
        label: "Description",
        name: "children",
    },
    {
        type: 'object',
        label: 'Composition',
        name: 'artists',
        list: true,
        ui: {
            itemProps: (item) => {
                return { label: item?.name };
              },
        },
        fields: [
            {
                type: "string",
                label: "Nom",
                name: "name",
                required: true,
              },
              {
                type: "image",
                label: "Avatar",
                name: "avatar",
              },
        ]
    },
    {
        type: 'object',
        label: 'Gallery',
        name: 'galery',
        list: true,
        ui: {
            itemProps: (item) => {
                return { label: item?.name };
              },
        },
        fields: [
            {
                type: "string",
                label: "Nom",
                name: "name",
                required: true,
              },
              {
                type: "image",
                label: "Image",
                name: "img",
              },
        ]
    },
  ],
};
export default Artist;
