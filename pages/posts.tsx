import { Container } from "../components/util/container";
import { Section } from "../components/util/section";
import { Posts } from "../components/posts";
import { client } from "../tina/__generated__/client";
import { Layout } from "../components/layout";
import { InferGetStaticPropsType } from "next";
import { useTina } from "tinacms/dist/react";

export default function HomePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const post = useTina(props.postsProps)
  const posts = post.data.postConnection.edges;
  const theme = useTina(props.themeProps);

  return (
    <Layout data={post.data.global as any} theme={post.data.global.theme as any} allThemes={theme.data.themesConnection as any} type={false} SEO={post.data.PostsSeo.seo as any}>
      <Section className="flex-1">
        <Container size="large" width="small">
          <Posts data={posts} />
        </Container>
      </Section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const tinaProps = await client.queries.pageQuery();
  const themeProps = await client.queries.themesConnection();
  const theme ={
    ...themeProps,
    enableVisualEditing: process.env.VERCEL_ENV === "preview",
  }
  const post = {
    ... tinaProps,
    enableVisualEditing: process.env.VERCEL_ENV === "preview",

  }
  return {
    props: {
      postsProps: JSON.parse(JSON.stringify(post)) as typeof post,
      themeProps: JSON.parse(JSON.stringify(theme)) as typeof theme,
    },
  };
};
