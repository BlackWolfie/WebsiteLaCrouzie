import * as React from "react";
import { Actions } from "../util/actions";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { Template } from "tinacms";
import { PageBlocksHeroPlus, Themes } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import RichText from "../styled/MDXRichText";

export const HeroPlus = ({ data, theme }: { data: PageBlocksHeroPlus, theme:Themes }) => {
  return (
    <Section>
      <Container
        size="large"
        width="xlarge"
        className="grid grid-cols-1 gap-14 justify-center items-center md:grid-cols-5"
      >
        <div className={`row-start-2 
        ${data.placement ? `md:col-span-3`:`md:col-start-3`} md:row-start-1 md:col-span-3 text-center md:text-left`}>
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
                className={`bg-clip-text bg-gradient-to-r`}
              >
                {data.headline}
              </span>
            </h3>
          )}
          {data.text && (
            <div
              data-tina-field={tinaField(data, "text")}
              className={`mx-auto mb-10 md:mx-0`}
            >
              <RichText content={data.text}/>

              {/* <TinaMarkdown content={data.text} /> */}
            </div>
          )}
          {data.actions && (
            <Actions
              className={`justify-center ${data.placement ? `md:justify-start`:`md:justify-end`} py-2`}
              parentColor={theme._sys.filename}
              actions={data.actions}
            />
          )}
        </div>
        <div className="flex row-start-1 justify-center md:flex-col md:flex-nowrap md:col-span-2">
          {data.imagePlus && 
          data.imagePlus.map((item,i)=>{
            return(
              <div
              key={"heroplus-"+i}
                data-tina-field={tinaField(item, "src")}
                className={`flex relative row-start-1 justify-center mx-2 md:col-span-2 md:mx-0 md:my-1`}
              >
                <img
                  className="absolute w-full rounded-lg max-w-xs md:max-w-none h-auto blur-2xl brightness-150 contrast-[0.9] dark:brightness-150 saturate-200 opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-hard-light"
                  src={item.src}
                  aria-hidden="true"
                />
                <img
                  className="relative z-10 w-full max-w-xs h-auto rounded-lg md:max-w-none"
                  alt={item.alt}
                  src={item.src}
                />
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  );
};

export const heroPlusBlockSchema: Template = {
  name: "heroPlus",
  label: "Hero Avec Plusieurs Images",
  ui: {
    previewSrc: "/blocks/heroPlus.png",
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
      templates: [
        {
          name: 'br',
          label: 'Saut de ligne',
          fields: [{ type: 'string', name: 'children', label: 'Content' }],
        },
      ],
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
        name: "placement",
        label: "Placement Gauche/Droite",
        type: "boolean",        
    },
    {
      type: "object",
      label: "Image",
      name: "imagePlus",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.alt };
        },
      },
      fields: [
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
