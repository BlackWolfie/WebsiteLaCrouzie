import * as React from "react";
import { Actions } from "../util/actions";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { useTheme } from "../layout";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import { PageBlocksHero, Themes } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export const Hero = ({ data, theme }: { data: PageBlocksHero, theme:Themes }) => {
  //const theme = useTheme();
  return (
    <Section color={theme._sys.filename}>
      <Container
        size="large"
        width="xlarge"
        className="grid grid-cols-1 md:grid-cols-5 gap-14 items-center justify-center"
      >
        <div className={`row-start-2 
        ${data.image.placement ? `md:col-span-3`:`md:col-start-3`} md:row-start-1 md:col-span-3 text-center md:text-left`}>
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
                className={`bg-clip-text bg-gradient-to-r `}
              >
                {data.headline}
              </span>
            </h3>
          )}
          {data.text && (
            <div
              data-tina-field={tinaField(data, "text")}
              className={`prose prose-lg mx-auto md:mx-0 mb-10 prose-dark`}
            >
              <TinaMarkdown content={data.text} />
            </div>
          )}
          {data.actions && (
            <Actions
              className={`justify-center ${data.image.placement ? `md:justify-start`:`md:justify-end`} py-2`}
              parentColor={theme._sys.filename}
              actions={data.actions}
            />
          )}
        </div>
        {data.image && (
          <div
            data-tina-field={tinaField(data.image, "src")}
            className={`relative row-start-1 
            md:col-span-2 flex justify-center`}
          >
            <img
              className="absolute w-full rounded-lg max-w-xs md:max-w-none h-auto blur-2xl brightness-150 contrast-[0.9] dark:brightness-150 saturate-200 opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-hard-light"
              src={data.image.src}
              aria-hidden="true"
            />
            <img
              className="relative z-10 w-full max-w-xs rounded-lg md:max-w-none h-auto"
              alt={data.image.alt}
              src={data.image.src}
            />
          </div>
        )}
      </Container>
    </Section>
  );
};

export const heroBlockSchema: Template = {
  name: "hero",
  label: "Hero",
  ui: {
    previewSrc: "/blocks/hero.png",
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
      type: "object",
      label: "Image",
      name: "image",
      fields: [
        {
          name: "placement",
          label: "Placement Gauche/Droite",
          type: "boolean",        
        },
        {
          name: "src",
          label: "Image Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },
  ],
};
