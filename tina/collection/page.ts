import type { Collection } from "tinacms";
import { heroBlockSchema } from "../../components/blocks/hero";
import { contentBlockSchema } from "../../components/blocks/content";
import { testimonialBlockSchema } from "../../components/blocks/testimonial";
import { featureBlockSchema } from "../../components/blocks/features";
import { heroPlusBlockSchema } from "../../components/blocks/heroPlus";
import { heroFullBlockSchema } from "../../components/blocks/heroFull";
import { carouselBlockSchema } from "../../components/blocks/carousel";
import { carouselFeatureBlockSchema } from "../../components/blocks/carouselFeature";
import { galleryBlockSchema } from "../../components/blocks/galery";
import { expertSeoPageProps } from "./seo";
import { heroVideoBlockSchema } from "../../components/blocks/heroVideo";
import { heroTextBlockSchema } from "../../components/blocks/heroText";
import { heroFeatureBlockSchema } from "../../components/blocks/heroFeature";

const Page: Collection = {
  label: "Pages",
  name: "page",
  path: "content/pages",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      }
      if (document._sys.filename === "about") {
        return `/about`;
      }
      return document._sys.filename ? document._sys.filename :  undefined;;
    },
  },
  fields: [
    expertSeoPageProps,
    {
      type: "string",
      label: "Title",
      name: "title",
      description:
        "The title of the page. This is used to display the title in the CMS",
      isTitle: true,
      required: true,
    },
    {
      type: "reference",
      label: "Categori",
      name: "themes",
      collections: ["themes"],
      required: true,
    },
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "Sections",
      ui: {
        visualSelector: true,
      },
      templates: [
        heroBlockSchema,
        heroPlusBlockSchema,
        heroFullBlockSchema,
        heroVideoBlockSchema,
        heroTextBlockSchema,
        heroFeatureBlockSchema,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        featureBlockSchema,
        contentBlockSchema,
        testimonialBlockSchema,
        galleryBlockSchema,
        carouselBlockSchema,
        carouselFeatureBlockSchema,
      ],
    },
  ],
};

export default Page;
