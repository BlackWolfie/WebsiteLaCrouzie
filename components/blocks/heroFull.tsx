import * as React from "react";
import { Actions } from "../util/actions";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { Template } from "tinacms";
import { PageBlocksHeroFull, Themes } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import RichText from "../styled/MDXRichText";

export const HeroFull = ({ data, theme }: { data: PageBlocksHeroFull, theme:Themes }) => {
  return (
    <Section   id={data.id }>

      <Container
        size="large"
        width="xlarge"
        className="grid gap-14 justify-center items-center max-w-none bg-center bg-cover"
        style={{ backgroundImage: `url(${data.src ? data.src : ''})` }}
      >
        <div className={`row-start-2 max-w-7xl text-center md:row-start-1 md:col-span-3 md:text-left`}>
          {data.tagline && (
            <h6
              data-tina-field={tinaField(data, "tagline")}
              className={`inline-block relative z-20 px-3 py-1 mb-8 font-bold tracking-wide text-md title-font`}
            >
              {data.tagline}
              <span className="absolute top-0 left-0 w-full h-full bg-current rounded-full -z-1 opacity-7"></span>
            </h6>
          )}
          {data.headline && (
            <h3
              data-tina-field={tinaField(data, "headline")}
              className={`relative mb-10 w-full text-5xl font-extrabold tracking-normal leading-tight title-font`}
            >
              <span
                className={`bg-clip-text`}
              >
                {data.headline}
              </span>
            </h3>
          )}
          {data.text && (
            <div
              data-tina-field={tinaField(data, "text")}
              className={`mx-auto mb-10 md:mx-0`}
              style={{ color: `${data.colorFull ? data.colorFull : ''}` }}
            >
              <RichText content={data.text}/>

              {/* <TinaMarkdown content={data.text} /> */}
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
    itemProps:(item) => {
      return { label: item?.id };
    },
  },
  fields: [
    {
      type: "string",
      label: "Identifiant",
      name: "id",
    },
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
      templates: [
        {
          name: 'br',
          label: 'Saut de ligne',
          fields: [{ type: 'string', name: 'children', label: 'Content' }],
        },
      ],
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
