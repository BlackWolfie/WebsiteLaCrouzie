import PhotoAlbum from "react-photo-album";

import NextJsImage from "../util/NextJsImage";
import { Template } from "tinacms";

export default function PhotoGallery() {
  return (
    <PhotoAlbum
      photos={photos}
      layout="masonry"
      renderPhoto={NextJsImage}
      defaultContainerWidth={1200}
      sizes={{
        size: "calc(100vw - 40px)",
        sizes: [
          { viewport: "(max-width: 299px)", size: "calc(100vw - 10px)" },
          { viewport: "(max-width: 599px)", size: "calc(100vw - 20px)" },
          { viewport: "(max-width: 1199px)", size: "calc(100vw - 30px)" },
        ],
      }}
    />
  );
}

export const galleryBlockSchema: Template = {
  name: "gallery",
  label: "Photo Gallery",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
    },
  },
  fields: [
    {
      type: "object",
      label: "Image",
      name: "gallery",
      list: true,
      fields : [
        {
          type: "string",
          label: "Source",
          name: "src",
        },
      ]
    },

  ],
};
