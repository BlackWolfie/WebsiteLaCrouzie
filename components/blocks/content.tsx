import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import { PageBlocksContent, Themes, ThemesTheme } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export const Content = ({ data , theme}: { data: PageBlocksContent , theme:Themes }) => {
  return (
    <Section color={theme._sys.filename}>
      <Container
        data-tina-field={tinaField(data, "body")}
        size="large"
        width="medium"
      >
        {data.tagline && (
            <h6
              data-tina-field={tinaField(data, "tagline")}
              className={`relative inline-block px-3 py-1 mb-2 text-md font-bold tracking-wide title-font z-20 text-center left-1/2 -translate-x-1/2`}
            >
              {data.tagline}
              <span className="absolute w-full h-full left-0 top-0 rounded-full -z-1 bg-current opacity-7"></span>
            </h6>
          )}
          {data.headline && (
            <h3
              data-tina-field={tinaField(data, "headline")}
              className={`w-full relative	mb-4 text-5xl font-extrabold tracking-normal leading-tight title-font text-center`}
            >
              <span
                className={`bg-clip-text  `}
              >
                {data.headline}
              </span>
            </h3>
          )}
          <div className={` prose prose-lg text-center max-w-none`}>
        <TinaMarkdown content={data.body} />
        </div>
      </Container>
    </Section>
  );
};

export const contentBlockSchema: Template = {
  name: "content",
  label: "Content",
  ui: {
    previewSrc: "/blocks/content.png",
    defaultItem: {
      body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
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
      type: "rich-text",
      label: "Body",
      name: "body",
    },
  ],
};
