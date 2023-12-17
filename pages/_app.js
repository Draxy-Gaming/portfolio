import '../styles/globals.css';
//components
import Layout from "../components/Layout";
//transition
import Transition from "../components/Transition";
//router
import { useRouter } from 'next/router';

//framemotion
import {AnimatePresence, motion } from 'framer-motion';
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return ( 
    <Layout>
      <AnimatePresence> <Component {...pageProps} /></AnimatePresence></Layout>
   
  )
}

export default MyApp;
