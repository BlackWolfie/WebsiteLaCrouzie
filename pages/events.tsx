import { Container } from "../components/util/container";
import { Section } from "../components/util/section";
import { Artists } from "../components/artists";
import { client } from "../tina/__generated__/client";
import { Layout } from "../components/layout";
import { InferGetStaticPropsType } from "next";
import { useTina } from "tinacms/dist/react";
import { Themes } from "../tina/__generated__/types";

export default function HomePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const artists = props.data.eventConnection.edges;
  const theme = useTina(props.themeProps);

  return (
    <Layout data={props.data.global as any} theme={props.data.global.theme as any} allThemes={theme.data.themesConnection as any} type={false} SEO={props.data.EventsSeo.seo as any}>
      <Section className="flex-1">
        <Container size="large" width="large">
            test
        </Container>
      </Section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const tinaProps = await client.queries.eventsQuery();
  const themeProps = await client.queries.themesConnection();
  const theme ={
    ...themeProps,
    enableVisualEditing: process.env.VERCEL_ENV === "preview",
  }
  return {
    props: {
      ...tinaProps,
      themeProps: JSON.parse(JSON.stringify(theme)) as typeof theme,
    },
  };
};

export type ArtistsType = InferGetStaticPropsType<
  typeof getStaticProps
>["data"]["eventConnection"]["edges"][number];
