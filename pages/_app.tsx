import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {AnimatePresence} from "framer-motion";
import Head from 'next/head'
import React from "react";
import {DefaultSeo} from "next-seo";
import Footer from "../components/Footer";
import FixedFadeToDark from "../components/FixedFadeToDark";


function MyApp({Component, pageProps, router}: AppProps) {
  const url = `https://fantasm.vercel.app${router.route}`

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favIcon.png" />
      </Head>
      <DefaultSeo
        titleTemplate="%s - Fantasm"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url,
          description: 'The personal website for Fantasm, developer.',
          site_name: 'Fantasm | fantasm.vercel.app',
          images: [],
        }}
        canonical={url}
      />
      <AnimatePresence exitBeforeEnter initial={true} onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} canonical={url} key={router.pathname} />
      </AnimatePresence>
      <Footer/>
      <FixedFadeToDark/>
    </>
  )

}

export default MyApp