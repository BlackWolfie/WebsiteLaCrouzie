import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import { PageBlocksContent, Themes, ThemesTheme } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import RichText from "../styled/MDXRichText";

export const Content = ({ data , theme}: { data: PageBlocksContent , theme:Themes }) => {
  return (
    <Section>
      <Container
        data-tina-field={tinaField(data, "body")}
        size="large"
        width="xlarge"
      >
        {data.tagline && (
            <h6
              data-tina-field={tinaField(data, "tagline")}
              className={`inline-block relative left-1/2 z-20 px-3 py-1 mb-2 font-bold tracking-wide text-center -translate-x-1/2 text-md title-font`}
            >
              {data.tagline}
              <span className="absolute top-0 left-0 w-full h-full bg-current rounded-full -z-1 opacity-7"></span>
            </h6>
          )}
          {data.headline && (
            <h3
              data-tina-field={tinaField(data, "headline")}
              className={`relative mb-4 w-full text-5xl font-extrabold tracking-normal leading-tight text-center title-font`}
            >
              <span
                className={`bg-clip-text`}
              >
                {data.headline}
              </span>
            </h3>
          )}
        <div className={`max-w-none text-center content`}>
          <RichText content={data.body}/>
          {/* <TinaMarkdown content={data.body}/> */}
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
      templates: [
        {
          name: 'Quote',
          label: 'Quote',
          fields: [
            {
              type: 'string',
              name: 'content',
              label: 'Content',
            },
            {
              type: 'string',
              name: 'author',
              label: 'Author',
            },
            {
              type: 'string',
              name: 'cite',
              label: 'Cite',
            },
          ],
        },
        {
          name: 'ArticleImage',
          label: 'ArticleImage',
          fields: [
            {
              type: 'image',
              name: 'src',
              label: 'Src',
            },
            {
              type: 'string',
              name: 'caption',
              label: 'Caption',
            },
          ],
        },
        {
          name: 'br',
          label: 'Saut de ligne',
          fields: [{ type: 'string', name: 'children', label: 'Content' }],
        },
      ],
    },
  ],
};
