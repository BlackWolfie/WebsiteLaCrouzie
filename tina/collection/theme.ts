import type { Collection } from "tinacms";

const Themes: Collection = {
  label: "Themes",
  name: "themes",
  path: "content/themes",
  format: "json",
  fields: [
    {
      type: "object",
      label: "Header",
      name: "header",
      fields : [
        {
            type: "string",
            label: "Titre",
            name: "name"
        },
        {
            type: "image",
            label: "Logo",
            name: "logo"
        },
        {
            type: "image",
            label: "Image de Presentation",
            name: "img"
        },
        {
            type: "object",
            label: "Nav Links",
            name: "nav",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.label };
              },
              defaultItem: {
                href: "home",
                label: "Home",
              },
            },
            fields: [
              {
                type: "string",
                label: "Lien",
                name: "href",
              },
              {
                type: "string",
                label: "Titre",
                name: "label",
              },
              {
                type: "object",
                label: "Sous Menu",
                name: "subNav",
                list: true,
                ui: {
                    itemProps: (item) => {
                        return { label: item?.label };
                    },
                    defaultItem: {
                        href: "home",
                        label: "Home",
                    },
                },
                fields: [
                    {
                        type: "string",
                        label: "Lien",
                        name: "href",
                      },
                      {
                        type: "string",
                        label: "Titre",
                        name: "label",
                      },
                ]
              }
            ],
          },
      ]
    },
    {
        type: "object",
        label: "Theme",
        name: "theme",
        fields : [
          {
              type: "string",
              label: "Couleur Primaire",
              name: "colorPrimary",
              ui: {
                component: 'color',
             },
          },
          {
            type: "string",
            label: "Couleur Secondaire",
            name: "colorSecondary",
            ui: {
              component: 'color',
           },
        },
        {
            type: "string",
            label: "Couleur Terciare",
            name: "colorTerciary",
            ui: {
              component: 'color',
           },
        },
        ]
    }
  ],
};
export default Themes;
