
import { Template } from "tinacms";
import { PageBlocksGallery, Themes } from "../../tina/__generated__/types";
import { Section } from "../util/section";
import { Container } from "../util/container";
import { tinaField } from "tinacms/dist/react";

export const Gallery = ({ data, theme }: { data: PageBlocksGallery, theme:Themes }) => {
  const r = data.gallery.length > 3 ? 'grid-cols-4' : 'grid-cols-'+data.gallery.length;
  
  return (
    <Section color={theme._sys.filename}>
      <Container
        size="large"
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
      <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-${r}`}
>
        {data.gallery && data.gallery.map((item , i) => (
          <div key={i}>
            <img
              data-tina-field={tinaField(item)}
              className=" w-full max-w-full rounded-lg object-cover object-center"
              src={item.src}
              alt={item.alt}
            />
          </div>
        ))}
      </div>
      </Container>
    </Section>
  );
}

export const galleryBlockSchema: Template = {
  name: "gallery",
  label: "Photo Gallery",
  ui: {
    previewSrc: "/blocks/gallery.png",
    defaultItem: {
      tagline: "Sous Titre",
      headline: "Titre",
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
      type: "object",
      label: "Image",
      name: "gallery",
      ui: {
        itemProps: (item) => {
          return { label: item?.alt };
        },
      },
      list: true,
      fields : [
        {
          type: "image",
          label: "Source",
          name: "src",
        },
        {
          type: "string",
          label: "Alt",
          name: "alt",
        },
      ]
    },

  ],
};
