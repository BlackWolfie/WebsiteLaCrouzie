import { Container } from "../components/util/container";
import { Section } from "../components/util/section";
import { Artists } from "../components/artists";
import { client } from "../tina/__generated__/client";
import { Layout } from "../components/layout";
import { InferGetStaticPropsType } from "next";
import { useTina } from "tinacms/dist/react";
import { ArtistConnection, Themes } from "../tina/__generated__/types";

export default function HomePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const artists = useTina(props.tinaProps);
  const theme = props.data.themesConnection;

  return (
    <Layout data={artists.data.global as any} theme={artists.data.global.theme as any} allThemes={theme as any} type={false} SEO={artists.data.artistSeo.seo as any}>
      <Section className="flex-1">
        <Container size="large" width="large">
          <Artists data={artists.data.artistConnection as ArtistConnection} theme={artists.data.global.theme.themes as Themes}/>
        </Container>
      </Section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const tinaProps = await client.queries.artistQuery();
  const themeProps = await client.queries.themesConnection();
  const props ={
    ...tinaProps,
    enableVisualEditing: process.env.VERCEL_ENV === "preview",
  }
  return {
    props: {
      ...themeProps,
      tinaProps: JSON.parse(JSON.stringify(props)) as typeof props,
    },
  };
};
