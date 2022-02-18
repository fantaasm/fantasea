import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {AnimatePresence} from "framer-motion";
import Head from 'next/head'
import React from "react";

// import { DefaultSeo } from 'next-seo'

function MyApp({Component, pageProps, router}: AppProps) {

  return (
      <AnimatePresence exitBeforeEnter initial={true} onExitComplete={() => window.scrollTo(0, 0)}>
        <Head><link rel="icon" type="image/png" href="/favIcon.png" /></Head>
        <Component {...pageProps} key={router.pathname} />
      </AnimatePresence>
  )
}

export default MyApp