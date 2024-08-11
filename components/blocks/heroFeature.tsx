import * as React from "react";
import { Actions } from "../util/actions";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { Template } from "tinacms";
import { PageBlocksHeroFeature, Themes } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import RichText from "../styled/MDXRichText";
import { Icon } from "../util/icon";
import { iconSchema } from "../util/icon";

export const HeroFeature = ({ data, theme }: { data: PageBlocksHeroFeature, theme:Themes }) => {
  return (
    <Section  id={data.id }>
        <Container
        size="large"
        width="xlarge"
      >
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="grid gap-12 md:grid-cols-2">
                    <div className={`lg:w-3/4 ${data.ltr ? "md:order-1" : "md:order-2" }`}>
                    {data.image && (
                        <div
                            data-tina-field={tinaField(data.image, "src")}
                            className={`flex relative row-start-1 justify-center md:col-span-2`}
                        >
                            <img
                            className="absolute w-full rounded-lg max-w-xs md:max-w-none h-auto blur-2xl brightness-150 contrast-[0.9] dark:brightness-150 saturate-200 opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-hard-light"
                            src={data.image.src}
                            aria-hidden="true"
                            />
                            <img
                            className="relative z-10 w-full max-w-xs h-auto rounded-lg md:max-w-none"
                            alt={data.image.alt}
                            src={data.image.src}
                            />
                        </div>
                        )}
                    </div>

                    <div className={`space-y-6 lg:space-y-10 ${data.ltr ? "md:order-2" : "md:order-1"  }`}>
                        { data.feature && data.feature.map((item,i)=> {
                            return (
                            <div className="flex">
                                 {item.icon && (
                                    <Icon
                                    tinaField={tinaField(item, "icon")}
                                    data={{ size: "small", ...item.icon }}
                                    />
                                )}
                        
                                <div className="ms-5 sm:ms-8">
                                    {item.headline &&
                                    <h3 className="text-base font-semibold text-gray-800 sm:text-lg">
                                        {item.headline}
                                    </h3>
                                    }
                                    { item.text && 
                                    <div className="mt-1 text-gray-600">
                                        <RichText content={item.text}/>
                                    </div>
                                    }
                                </div>
                            </div>

                        )
                        })}
                        
                    
                    </div>
                </div>
            </div>
        </Container>
    </Section>
  );
};

export const heroFeatureBlockSchema: Template = {
  name: "heroFeature",
  label: "HeroFeature",
  ui: {
    previewSrc: "/blocks/heroFeature.png",
    defaultItem: {
      headline: "This Big Text is Totally Awesome",
      text: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
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
        type: "boolean",
        label: "Gauche a Droite",
        name: "ltr",
    },
    {
        type: "object",
        label: "Image",
        name: "image",
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
    {
        label:"Liste",
        name: "feature",
        type: "object",
        list:true,
        ui: {
          itemProps: (item) => ({ label: item.headline }),
        },
        fields:[
            iconSchema as any,
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
        ]
    }
],
};
