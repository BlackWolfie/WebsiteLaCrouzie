import type { Page, PageBlocks, Themes, ThemesTheme } from "../tina/__generated__/types";
import { Content } from "./blocks/content";
import { Features } from "./blocks/features";
import { Hero } from "./blocks/hero";
import { Testimonial } from "./blocks/testimonial";
import { tinaField } from "tinacms/dist/react";

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <Block block={block} theme={props.themes}/>
              </div>
            );
          })
        : null}
    </>
  );
};

const Block = ({ block , theme}:{block: PageBlocks, theme: Themes}) => {
  switch (block.__typename) {
    case "PageBlocksContent":
      return <Content data={block} theme={theme}/>;
    case "PageBlocksHero":
      return <Hero data={block} theme={theme}/>;
    case "PageBlocksFeatures":
      return <Features data={block} theme={theme}/>;
    case "PageBlocksTestimonial":
      return <Testimonial data={block} theme={theme}/>;
    default:
      return null;
  }
};
