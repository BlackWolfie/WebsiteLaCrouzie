import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { Template } from "tinacms";
import { PageBlocksTestimonial, Themes } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export const Testimonial = ({ data,theme }: { data: PageBlocksTestimonial , theme:Themes }) => {
  return (
    <Section color={theme._sys.filename}>
      <Container size="large">
        <blockquote>
          <div
            className={`relative z-10 max-w-5xl mx-auto text-4xl lg:text-5xl font-bold tracking-normal text-center title-font `}
          >
            <span
              className={`block opacity-80 text-8xl absolute inset-y-1/2 transform translate-y-2	-left-4 leading-4 -z-1`}
              style={{ color : `${theme.theme.colorPrimary? theme.theme.colorPrimary : 'black' }`}}
            >
              &ldquo;
            </span>
            <p
              data-tina-field={tinaField(data, `quote`)}
              className="relative opacity-95"
              style={{ color : `${theme.theme.colorSecondary? theme.theme.colorSecondary : 'black' }`}}

            >
              {data.quote}
            </p>
            <span
              className={`block opacity-80 text-8xl absolute inset-y-1/2 transform translate-y-3	-right-4 leading-4 -z-1`}
              style={{ color : `${theme.theme.colorPrimary? theme.theme.colorPrimary : 'black' }`}}

            >
              &rdquo;
            </span>
          </div>
          <div className={`my-8 flex-grow-0`}>
            <span
              className={`block mx-auto h-0.5 w-1/6 `}
              style={{ background : `${theme.theme.colorTerciary? theme.theme.colorTerciary : 'black' }`}}
            ></span>
          </div>
          <footer className="text-center">
            <p
              data-tina-field={tinaField(data, `author`)}
              className={`tracking-wide title-font font-bold text-lg `}
              style={{ color : `${theme.theme.colorSecondary? theme.theme.colorSecondary : 'black' }`}}

            >
              {data.author}
            </p>
          </footer>
        </blockquote>
      </Container>
    </Section>
  );
};

export const testimonialBlockSchema: Template = {
  name: "testimonial",
  label: "Testimonial",
  ui: {
    previewSrc: "/blocks/testimonial.png",
    defaultItem: {
      quote:
        "There are only two hard things in Computer Science: cache invalidation and naming things.",
      author: "Phil Karlton",
      color: "primary",
    },
  },
  fields: [
    {
      type: "string",
      ui: {
        component: "textarea",
      },
      label: "Quote",
      name: "quote",
    },
    {
      type: "string",
      label: "Author",
      name: "author",
    },
  ],
};
