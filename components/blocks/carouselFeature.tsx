import * as React from "react";
import { Template } from "tinacms";
import { PageBlocksCarouselFeature, Themes } from "../../tina/__generated__/types";
import { Container } from "../util/container";
import { tinaField } from "tinacms/dist/react";
 
export const GalleryWithCarouselFeature= ({ data, theme }: { data: PageBlocksCarouselFeature, theme:Themes }) =>  {
    const [active, setActive] = React.useState(
        data.carouselFeature && data.carouselFeature['0'].src 
      );
    return (
    <Container
        data-tina-field={tinaField(data)}
        size="medium"
        width="xlarge"
        id={data.id }
      >
        <div className="grid gap-4">
            <div>
                <img
                className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                src={active}
                alt=""
                />
            </div>
            <div className="grid grid-cols-7 gap-4 justify-items-center grid-rows-[7rem]">
                {data.carouselFeature && data.carouselFeature.map((item, index) => {
                    return (
                    <div key={index}>
                        <img
                        data-tina-field={tinaField(item)}
                        onClick={() => setActive(item.src)}
                        src={item.src}
                        className=" h-28 max-w-full cursor-pointer rounded-lg object-cover object-center"
                        alt={item.alt}
                        />
                    </div>
                    )
                })}
            </div>
        </div>
    </Container>
  );
}

export const carouselFeatureBlockSchema: Template = {
    name: "carouselFeature",
    label: "Carrousel avec thumbnail",
    ui: {
      previewSrc: "/blocks/carouselFeature.png",
      defaultItem: {
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
        type: "object",
        label: "Image",
        name: "carouselFeature",
        list: true,
        ui: {
            itemProps: (item) => ({ label: item.alt }),
          },
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