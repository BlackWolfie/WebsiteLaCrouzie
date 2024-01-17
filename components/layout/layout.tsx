import React from "react";
import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";
import { Theme } from "./theme";
import layoutData from "../../content/global/index.json";
import { Global , Page, ThemesConnection} from "../../tina/__generated__/types";
import { Icon } from "../util/svg";
import ScrollToTopButton from "../util/scrollToTop";

export const Layout = ({
  type,
  data ,
  theme ,
  allThemes,
  children,
}: {
  type: boolean;
  data?: Omit<Global, "id" | "_sys" | "_values">;
  theme?: Page;
  allThemes?: ThemesConnection;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Head>
        {}
        <title>Debout les Yeux </title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Découvrez les évènements à l'affiche avec l'association Debout Les Yeux. Les cours hebdomadaires proposés, les activités du café associatif et les évènements et festival à venir."/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
      <div className="flex flex-col flex-nowrap fixed right-2 z-50 top-48 ">
        {allThemes?.edges.map((item, i)=> {
          let t = null 
          item.node.header.nav && item.node.header.nav.map((e)=>{                
            e.default === true ? t= e.href : 'console.log(e.href)'
            return t
          })
          return (
            <a href={t} key={i}>
              <Icon
                className={` hover`}
                data={{
                  name: item.node.header.icon.favicon,
                  color: theme?.themes.theme.colorSecondary ? theme?.themes.theme.colorSecondary : data.theme.themes.theme.colorSecondary ,
                  size: "xxl"
                }}
              />
            </a>
          )
        })}
        <ScrollToTopButton color={theme?.themes.theme.colorSecondary ? theme?.themes.theme.colorSecondary : data.theme.themes.theme.colorSecondary}/>
      </div>
      <Theme data={data?.theme}>
        <div
          className={`min-h-screen flex flex-col ${
            data?.theme.font === "nunito" && "font-nunito"
          } ${data?.theme.font === "lato" && "font-lato"} ${
            data?.theme.font === "sans" && "font-sans"
          } ${data?.theme.font === "montserrat" && "font-montserrat"} 
          ${theme?.themes._sys.filename}`}
        >
          <Header type={type} data={theme.themes} title={theme.title? theme.title : 'La Crouzié'}/>
          <div className="flex-1 text-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-1000 flex flex-col">
            {children}
          </div>
          <Footer
            data={data?.footer}
            theme={theme?.themes.theme ? theme?.themes.theme : data.theme.themes.theme}
            Style={theme?.themes._sys.filename}/>
        </div>
      </Theme>
    </>
  );
};
