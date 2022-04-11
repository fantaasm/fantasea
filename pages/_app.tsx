import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

export let reportWebVitals: void;

if (process.env.NODE_ENV === "development") {
  // @ts-ignore
  reportWebVitals = (metrics) => {
    console.log(metrics);
  };
}

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = process.env.NEXT_PUBLIC_DOMAIN_NAME + router.asPath;

  return (
    <>
      <Head>
        <link rel="icon" type="image/webp" href="/favicon.webp" />
      </Head>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_US",
          url,
          site_name: "Fantasea",
        }}
        canonical={url}
      />
      <Component {...pageProps} canonical={url} key={router.pathname} />
    </>
  );
}

export default MyApp;
