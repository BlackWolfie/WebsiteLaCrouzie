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
  const theme = props.data.themesConnection
  return (
    <Layout type={true} data={data.global as any} theme={data.page as any} allThemes={theme as any} SEO={data.page.seo as any}>
      <Blocks {...data.page as any} />
    </Layout> 
  );
}

export const getStaticProps = async ({ params }) => {
  const tinaProps = await client.queries.contentQuery({
    relativePath: `${params.filename}.mdx`,
  });
  const themeProps = await client.queries.themesConnection();
  const props = {
    ...tinaProps,
    enableVisualEditing: process.env.VERCEL_ENV === "preview",
  };

  return {
    props: {
      content : JSON.parse(JSON.stringify(props)) as typeof props,
      ...themeProps
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
