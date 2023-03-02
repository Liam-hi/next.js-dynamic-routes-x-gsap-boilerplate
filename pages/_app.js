import '@/styles/globals.css'
import { motion, AnimatePresence } from "framer-motion"
import { Router, useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
  <AnimatePresence mode='wait'><Component {...pageProps}  key={router.asPath}/></AnimatePresence>
  );
}
