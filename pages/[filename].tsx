import React from "react";
import { InferGetStaticPropsType } from "next";
import { Blocks } from "../components/blocks-renderer";
import { useTina } from "tinacms/dist/react";
import { Layout } from "../components/layout";
import { client } from "../tina/__generated__/client";

export default function HomePage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { data } = useTina(props.content);
  const theme = useTina(props.themeprops)
  return (
    <Layout rawData={data} data={data.global as any} theme={data.page as any} allThemes={theme.data.themesConnection as any}>
      <Blocks {...data.page} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const tinaProps = await client.queries.contentQuery({
    relativePath: `${params.filename}.md`,
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

export const getStaticPaths = async () => {
  const pagesListData = await client.queries.pageConnection();
  return {
    paths: pagesListData.data.pageConnection?.edges?.map((page) => ({
      params: { filename: page?.node?._sys.filename },
    })),
    fallback: false,
  };
};
