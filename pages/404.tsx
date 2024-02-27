import { InferGetStaticPropsType } from "next";
import { HeroFull } from "../components/blocks/heroFull";
import { Layout } from "../components/layout";
import client from "../tina/__generated__/client";
import theme from "@material-tailwind/react/theme";
import { useTina } from "tinacms/dist/react";

export default function FourOhFour(  props: InferGetStaticPropsType<typeof getStaticProps>
  ) {
    const { data } = useTina(props.content);
    const theme = useTina(props.themeprops)

  return (
    <Layout data={data.global as any} theme={data.page as any} allThemes={theme.data.themesConnection as any}>
      <HeroFull
        data={{
          headline: "404 – Page Not Found",
          text: "Oops! It seems there's nothing here, how embarrassing.",
          actions: [
            {
              label: "Return Home",
              type: "button",
              icon: true,
              link: "/",
            },
          ],
        }} theme={data.page.themes as any}      />
    </Layout>
  );
}

export const getStaticProps = async() => {
  const tinaProps = await client.queries.contentQuery({
    relativePath: `home.mdx`,
  });
  const themeProps = await client.queries.themesConnection();
  const props = {
    ...tinaProps,
    enableVisualEditing: process.env.VERCEL_ENV === "preview",
  };
  const theme ={
    ...themeProps,
    enableVisualEditing: process.env.VERCEL_ENV === "preview",
  }

  return {
    props: {
      content : JSON.parse(JSON.stringify(props)) as typeof props,
      themeprops : JSON.parse(JSON.stringify(theme)) as typeof theme
    }
    
  };
};
