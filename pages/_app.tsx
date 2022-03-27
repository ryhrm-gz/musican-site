import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { DefaultSeo } from "next-seo";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <DefaultSeo
        defaultTitle="musican"
        canonical="https://musican.vercel.app/"
        description="ミュージシャンのための楽曲管理アプリ"
        twitter={{
          cardType: "summary",
        }}
        openGraph={{
          type: "website",
          url: "https://musican.vercel.app/",
          site_name: "musican",
          images: [
            { url: "./icon_512x512.png", width: 512, height: 512, alt: "Icon" },
          ],
        }}
      />
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
          primaryColor: "teal",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
