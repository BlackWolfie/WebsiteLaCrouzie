import * as React from "react";
import { Carousel } from "@material-tailwind/react";
import { Template } from "tinacms";
import { PageBlocksCarousel, Themes } from "../../tina/__generated__/types";
import { Container } from "../util/container";
import { tinaField } from "tinacms/dist/react";
 
export const GalleryWithCarousel= ({ data, theme }: { data: PageBlocksCarousel, theme:Themes }) =>  {
  return (
    <Container
        data-tina-field={tinaField(data)}
        size="medium"
        width="large"
      >
        <Carousel loop={true} autoplay={data.autoplay} className="rounded-xl">
        { data.carousel && data.carousel.map((item,i)=>{
            return(
                <img
                  data-tina-field={tinaField(item)}
                    key={'carousel'+i}
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover object-center"
                />
            )
        })

        }

        </Carousel>
    </Container>
  );
}

export const carouselBlockSchema: Template = {
    name: "carousel",
    label: "Carrousel",
    ui: {
      previewSrc: "/blocks/carousel.png",
      defaultItem: {
      },
    },
    fields: [
        {
            type: "boolean",
            label: "Autoplay",
            name: "autoplay",
        },
        {
        type: "object",
        label: "Image",
        name: "carousel",
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