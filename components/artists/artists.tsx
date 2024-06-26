import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { ArtistConnection, Themes} from "../../tina/__generated__/types";
import { Actions } from "../util/actions";
import { Section } from "../util/section";
import { Container } from "../util/container";
import { format } from "date-fns";

export const Artists = ({ data, theme }: { data: ArtistConnection, theme: Themes }) => {


  return (
    <Section color={theme._sys.filename} className="!bg-transparent">
      {data.edges.map((artistData, i) => {
        const artist = artistData.node;
        const date = new Date(artist.date);
        let formatDate='';
        if (!isNaN(date.getTime())) {
          formatDate = format(date, "yyyy");
        }

        return (
          <Container
            key={"artsit-"+i}
            size="medium"
            width="xlarge"
            className="grid grid-cols-1 gap-14 justify-center items-center md:grid-cols-5">
          
            <div className={`row-start-2 text-center ${ i%2===0 ? 'md:col-span-3': 'md:col-start-3' } md:col-span-3 md:row-start-1 md:text-left`}>
              {formatDate && (
              <h6
                className={`inline-block relative z-20 px-3 py-1 mb-8 font-bold tracking-wide text-md title-font`}
              >
                {formatDate}
                <span className="absolute top-0 left-0 w-full h-full bg-current rounded-full -z-1 opacity-7"></span>
              </h6>
            )}
              {artist.name && (
                <h3
                  className={`relative mb-10 w-full text-5xl font-extrabold tracking-normal leading-tight title-font`}
                >
                  <span
                    className={`bg-clip-text bg-gradient-to-r`}
                  >
                    {artist.name}
                  </span>
                </h3>
              )}
              {artist.children && (
                <div
                  className={`mx-auto mb-10 md:mx-0`}
                >
                  <TinaMarkdown content={artist.children} />
                </div>
              )}
              {artist.actions && (
                <Actions
                  className={`justify-center py-2 md:justify-start`}
                  parentColor={theme._sys.filename}
                  actions={artist.actions} />
              )}
            </div>
            {artist.img && (
            <div
              className={`flex relative row-start-1 justify-center md:col-span-2`}>
                <img
                  className="absolute w-full rounded-lg max-w-xs md:max-w-none h-auto blur-2xl brightness-150 contrast-[0.9] dark:brightness-150 saturate-200 opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-hard-light"
                  src={artist.img}
                  aria-hidden="true" />
                <img
                  className="relative z-10 w-full max-w-xs h-auto rounded-lg md:max-w-none"
                  alt={artist.name}
                  src={artist.img} />
            </div>
            )}
            <div className={`m-auto mt-8 w-1/2 h-1 md:col-span-6`}  style={{ backgroundColor : `${theme.theme.colorSecondary? theme.theme.colorSecondary : 'black' }`}}></div>
          </Container>
        )})}
    </Section>
  );
};
