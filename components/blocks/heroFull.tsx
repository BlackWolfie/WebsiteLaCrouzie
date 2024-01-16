import * as React from "react";
import { Actions } from "../util/actions";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { useTheme } from "../layout";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import { PageBlocksHeroFull, Themes } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export const HeroFull = ({ data, theme }: { data: PageBlocksHeroFull, theme:Themes }) => {
  //const theme = useTheme();
  return (
    <Section color={theme._sys.filename} >

      <Container
        size="large"
        className="grid gap-14 items-center justify-center max-w-none bg-cover bg-center"
        style={{ backgroundImage: `url(${data.src ? data.src : ''})` }}
      >
        <div className={`row-start-2  max-w-7xl
         md:row-start-1 md:col-span-3 text-center md:text-left`}>
          {data.tagline && (
            <h6
              data-tina-field={tinaField(data, "tagline")}
              className={`relative inline-block px-3 py-1 mb-8 text-md font-bold tracking-wide title-font z-20`}
            >
              {data.tagline}
              <span className="absolute w-full h-full left-0 top-0 rounded-full -z-1 bg-current opacity-7"></span>
            </h6>
          )}
          {data.headline && (
            <h3
              data-tina-field={tinaField(data, "headline")}
              className={`w-full relative	mb-10 text-5xl font-extrabold tracking-normal leading-tight title-font`}
            >
              <span
                className={`bg-clip-text `}
              >
                {data.headline}
              </span>
            </h3>
          )}
          {data.text && (
            <div
              data-tina-field={tinaField(data, "text")}
              className={` prose-lg mx-auto md:mx-0 mb-10 prose-dark`}
              style={{ color: `${data.colorFull ? data.colorFull : ''}` }}
            >
              <TinaMarkdown content={data.text} />
            </div>
          )}
          {data.actions && (
            <Actions
              className={`justify-center py-2`}
              parentColor={theme._sys.filename}
              actions={data.actions}
            />
          )}
        </div>
      </Container>
    </Section>
  );
};

export const heroFullBlockSchema: Template = {
  name: "heroFull",
  label: "Hero Avec Image de Fond",
  ui: {
    previewSrc: "/blocks/heroFull.png",
    defaultItem: {
      tagline: "Here's some text above the other text",
      headline: "This Big Text is Totally Awesome",
      text: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
    },
  },
  fields: [
    {
      type: "string",
      label: "Sous Titre",
      name: "tagline",
    },
    {
      type: "string",
      label: "Titre",
      name: "headline",
    },
    {
      label: "Text",
      name: "text",
      type: "rich-text",
    },
    {
      label: "Couleur du Texte",
      name: "colorFull",
      type: 'string',
      ui : {
        component: 'color',
      },
    },
    {
      label: "Boutton",
      name: "actions",
      type: "object",
      list: true,
      ui: {
        defaultItem: {
          label: "Action Label",
          type: "button",
          icon: true,
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
      name: "src",
      label: "Image Source",
      type: "image",
    },
  ],
};
