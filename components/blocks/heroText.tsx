import * as React from "react";
import { Actions } from "../util/actions";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { Template } from "tinacms";
import { PageBlocksHeroText, Themes } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import RichText from "../styled/MDXRichText";
import { Icon } from "../util/icon";
import { iconSchema } from "../util/icon";

export const HeroText = ({ data, theme }: { data: PageBlocksHeroText, theme:Themes }) => {
  return (
    <Section  id={data.id }>
        <Container
        size="large"
        width="xlarge"
      >
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="grid gap-12 md:grid-cols-2">
                    <div className={`lg:w-3/4 ${data.ltr ? "md:order-1" : "md:order-2" }`}>
                        <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl" ata-tina-field={tinaField(data, "headline")}>
                             {data.headline}
                        </h2>
                        <div
                            data-tina-field={tinaField(data, "text")}
                            className={`mt-3 text-gray-800`}
                            >
                                <RichText content={data.text}/>

                            {/* <TinaMarkdown content={data.text} /> */}
                        </div>
                        {data.actionLabel && (
                            <p className="mt-5" data-tina-field={tinaField(data, "actionLabel")}>
                                <a className="inline-flex gap-x-1 items-center font-medium text-blue-600" href={data.actionLink}>
                                {data.actionLabel}
                                <svg className="flex-shrink-0 transition ease-in-out size-4 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                                </a>
                            </p>
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

export const heroTextBlockSchema: Template = {
  name: "heroText",
  label: "HeroText",
  ui: {
    previewSrc: "/blocks/heroText.png",
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
        label: "Texte du lien",
        name: "actionLabel",
        type: "string",
    },

    {
        label: "Lien",
        name: "actionLink",
        type: "string",
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
            iconSchema,
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
