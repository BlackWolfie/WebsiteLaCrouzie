import type { Collection } from "tinacms";
import { iconSchema } from "../../components/util/icon";
import { ColorPickerInput } from "../fields/color";

const Global: Collection = {
  label: "Global",
  name: "global",
  path: "content/global",
  format: "json",
  ui: {
    global: true,
  },
  fields: [
    {
      type: "object",
      label: "Footer",
      name: "footer",
      fields: [
        {
          type: "object",
          label: "Navigation",
          name: "links",
          fields: [
            {
              type: "string",
              label: "Titre",
              name: "name",
            },
            {
              type: "object",
              label: "Lien",
              name: "nav",
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: item?.name };
                },
              },
              fields: [
                {
                  type: "string",
                  label: "Titre",
                  name: "name",
                },
                {
                  type: "string",
                  label: "Lien",
                  name: "link",
                },
              ]
            },
          ],
        },
        {
          type: "object",
          label: "Contact",
          name: "contact",
          fields: [
            {
              type: "string",
              label: "Titre",
              name: "name",
            },
            {
              type: "string",
              label: "Adresse",
              name: "addr",
            },
            {
              type: "string",
              label: "Lien Adresse",
              name: "laddr",
            },
            {
              type: "string",
              label: "Telephone",
              name: "phone",
              list:true
            },
            {
              type: "string",
              label: "Email",
              name: "email",
              list: true
            },
          ],
        },
        {
          type: "object",
          label: "Social Links",
          name: "social",
          fields: [
            {
              type: "string",
              label: "Facebook",
              name: "facebook",
            },
            {
              type: "string",
              label: "Twitter",
              name: "twitter",
            },
            {
              type: "string",
              label: "Instagram",
              name: "instagram",
            },
            {
              type: "string",
              label: "Pinterest",
              name: "pinterest",
            },
          ],
        },
        {
          type: "object",
          label: "Nos partenaire",
          name: "part",
          fields: [
            {
              type: "object",
              label: "Nos partenaire",
              name: "imgpart",
              list:true,
              ui: {
                itemProps: (item) => {
                  return { label: item?.name };
                },
              },
              fields:[
                {
                  type: "string",
                  label: "Titre",
                  name: "name",
                },
                {
                  type: "string",
                  label: "Lien",
                  name: "link",
                },
                {
                  type: "image",
                  label: "Image",
                  name: "img",
                },
              ]
            },
          ],
        },
        {
          type: "object",
          label: "Legal",
          name: "legal",
          fields: [
            {
              type: "string",
              label: "Lien Mentions légales",
              name: "legal",
            },
            {
              type: "string",
              label: "Copyright",
              name: "copyright",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      label: "Theme",
      name: "theme",
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      fields: [
        {
          type: "string",
          label: "Primary Color",
          name: "color",
          ui: {
            component: ColorPickerInput,
          },
        },
        {
          type: "string",
          name: "font",
          label: "Font Family",
          options: [
            {
              label: "System Sans",
              value: "sans",
            },
            {
              label: "Nunito",
              value: "nunito",
            },
            {
              label: "Lato",
              value: "lato",
            },
            {
              label: "Montserrat",
              value: "montserrat",
            },
          ],
        },
        {
          type: "string",
          name: "darkMode",
          label: "Dark Mode",
          options: [
            {
              label: "Light",
              value: "light",
            },
          ],
        },
      ],
    },
  ],
};

export default Global;
