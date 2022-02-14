import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {AnimatePresence} from "framer-motion";

function MyApp({Component, pageProps}: AppProps) {
  return(<Component {...pageProps} />)
}
// <AnimatePresence exitBeforeEnter initial={true}>
// </AnimatePresence>)
export default MyApp