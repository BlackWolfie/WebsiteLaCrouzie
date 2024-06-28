import React from "react";
import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";
// import { Theme } from "./theme";
import { Global , Page, PageSeo, ThemesConnection} from "../../tina/__generated__/types";
import { Icon } from "../util/svg";
import ScrollToTopButton from "../util/scrollToTop";
import StyledComponentsRegistry from '../util/registry'
import PrelineScript from "../util/PrelineScript";

export const Layout = ({
  type,
  data ,
  theme ,
  allThemes,
  SEO,
  children,
}: {
  type?: boolean;
  data?: Omit<Global, "id" | "_sys" | "_values">;
  theme?: Page;
  allThemes?: ThemesConnection;
  SEO?: PageSeo;
  children: React.ReactNode;
}) => {
  const metatitle= "Debout les Yeux ";
  const metadescription = "Découvrez les évènements à l'affiche avec l'association Debout Les Yeux. Les cours hebdomadaires proposés, les activités du café associatif et les évènements et festival à venir.";
  return (
    <>
      <Head>
        <PrelineScript />
        <title>{SEO?.title ? SEO?.title : metatitle}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content={SEO?.description ? SEO?.description : metadescription}/>
        <meta name="robot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* Meta Key Word */}
        <meta name="Keyword" content={SEO?.addtionalMetaTags?.toString()}/>
        {/* OPEN GRAPH META */}
        { SEO?.openGraph && (
          <>
          <meta property="og:locale" content="fr-FR"/>
          <meta property="og:type" content={SEO?.openGraph.type ? SEO?.openGraph.type : 'siteweb'}/>
          <meta property="og:site_name" content={SEO?.openGraph.siteName ? SEO?.openGraph.siteName : "La Crouzié"} />
          <meta property="og:title" content={SEO?.openGraph.title ? (SEO?.title && SEO?.title) : metatitle} />
          <meta property="og:url" content={SEO?.openGraph.url} />
          <meta property="og:description" content={SEO?.openGraph.description ? (SEO?.description && SEO?.description) : metadescription} />
          <meta property="og:image" content={SEO?.openGraph.images?.url} />
          <meta property="og:image:width" content={SEO?.openGraph.images?.width?.toString()} />
          <meta property="og:image:height" content={SEO?.openGraph.images?.height?.toString()}/>
          </>
        )}
        <link rel="shortcut icon" href="favicon-lc-yellow.svg" type="image/x-icon"/>
        {data?.theme.font === "nunito" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&display=swap"
              rel="stylesheet"
            />
          </>
        )}
        {data?.theme.font === "lato" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap"
              rel="stylesheet"
            />
          </>
        )}
        {data?.theme.font === 'montserrat' && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link 
              href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" 
              rel="stylesheet"
              />
          </>
        )}
      </Head>
      <div className="hidden z-50 flex-col flex-nowrap sm:flex sm:fixed sm:right-2 sm:top-48">
        { allThemes?.edges.map((item, i)=> {
          let t = null 
          item.node.header.nav && item.node.header.nav.map((e)=>{                
            e.default === true ? t= e.href : 'console.log(e.href)'
            return t
          })
          return (
            <a href={t} key={i}>
              <Icon
                className={`hover`}
                data={{
                  name: item.node.header.icon.favicon,
                  color: theme?.themes?.theme.colorSecondary ? theme?.themes.theme.colorSecondary : data.theme.themes.theme.colorSecondary ,
                  size: "xxl"
                }}
              />
            </a>
          )
        })}
        <ScrollToTopButton color={theme?.themes?.theme.colorSecondary ? theme?.themes.theme.colorSecondary : data.theme.themes.theme.colorSecondary}/>
      </div>
      {/* <Theme data={data?.theme}> */}
        <div
          className={`min-h-screen flex flex-col ${
            data?.theme.font === "nunito" && "font-nunito"
          } ${data?.theme.font === "lato" && "font-lato"} ${
            data?.theme.font === "sans" && "font-sans"
          } ${data?.theme.font === "montserrat" && "font-montserrat"} 
          ${theme?.themes?._sys.filename}`}
        >
          <Header type={type} data={theme?.themes ? theme.themes : data.theme.themes} title={theme?.title? theme.title : 'La Crouzié'} all={allThemes}/>
          <div className="flex flex-col flex-1 text-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-1000">
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </div>
          <Footer
            data={data?.footer}
            theme={theme?.themes?.theme ? theme?.themes.theme : data.theme.themes.theme}
            Style={theme?.themes?._sys.filename}/>
        </div>
      {/* </Theme> */}
    </>
  );
};
