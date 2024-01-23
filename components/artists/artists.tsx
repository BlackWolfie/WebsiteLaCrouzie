import React from "react";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { BsArrowRight } from "react-icons/bs";
import { ArtistsType } from "../../pages/artists";
import { Page, Themes} from "../../tina/__generated__/types";

import { tinaField } from "tinacms/dist/react";
import { Actions } from "../util/actions";
import { Section } from "../util/section";
import { Container } from "../util/container";

export const Artists = ({ data, theme }: { data: ArtistsType[], theme: Themes }) => {


  return (
    <Section color={theme._sys.filename}>
      {data.map((artistData, i) => {
        const artist = artistData.node;

        return (
          <Container
            key={"artsit-"+i}
            size="large"
            width="xlarge"
            className="grid grid-cols-1 md:grid-cols-5 gap-14 items-center justify-center">
          
            <div className={`row-start-2 md:col-span-3 md:row-start-1 text-center md:text-left`}>
              {artist.name && (
                <h3
                  data-tina-field={tinaField(artist, "name")}
                  className={`w-full relative	mb-10 text-5xl font-extrabold tracking-normal leading-tight title-font`}
                >
                  <span
                    className={`bg-clip-text bg-gradient-to-r `}
                  >
                    {artist.name}
                  </span>
                </h3>
              )}
              {artist.children && (
                <div
                  data-tina-field={tinaField(artist, "children")}
                  className={`prose prose-lg mx-auto md:mx-0 mb-10 prose-dark`}
                >
                  <TinaMarkdown content={artist.children} />
                </div>
              )}
              {artist.actions && (
                <Actions
                  className={`justify-center md:justify-start py-2`}
                  parentColor={theme._sys.filename}
                  actions={artist.actions} />
              )}
            </div>
            {artist.img && (
            <div
              data-tina-field={tinaField(artist, "img")}
              className={`relative row-start-1 md:col-span-2 flex justify-center`}>
                <img
                  className="absolute w-full rounded-lg max-w-xs md:max-w-none h-auto blur-2xl brightness-150 contrast-[0.9] dark:brightness-150 saturate-200 opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-hard-light"
                  src={artist.img}
                  aria-hidden="true" />
                <img
                  className="relative z-10 w-full max-w-xs rounded-lg md:max-w-none h-auto"
                  alt={artist.name}
                  src={artist.img} />
            </div>
            )}
          </Container>
        )})}
    </Section>
  );
};
