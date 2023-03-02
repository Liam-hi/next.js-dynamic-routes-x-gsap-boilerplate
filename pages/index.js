import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import TriggeredCallback from '@/components/TriggeredCallback'
import gsap from "gsap";
import OnInteraction from '@/components/OnInteraction'
import { useRef} from "react";
import useLayoutEffect from '@/components/use-isomorphic-layout-effect';
import { motion } from 'framer-motion'
import data from '@/utils/data'
import Projects from '@/components/Projects'




const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const populate = data.map(x =>
    <Link key={x.id} href={`/${x.id}`}><li>
      {x.name}
    </li></Link>
  );

  return (
  <div className='hejsanmorsan'>
    <div className="ttt">
    <Navbar />
    <div className='w-8'>
    <motion.svg key="arrow" transition={{ duration: 0.6, ease: "easeInOut" }} exit={{ transform: 'translate(-100%, -100%)', opacity: 0}} initial={{ transform: 'translate(-100%, -100%)', opacity: 0 }} animate={{ transform: 'translate(0%, 0%)', opacity: 1 }} xmlns="http://www.w3.org/2000/svg" className="w-24" viewBox="0 0 157.381 157.38"><g data-name="Group 66" fill="none" stroke="currentColor" strokeWidth="14"><path data-name="Path 1" d="M20.352 104.704l84.352-.001.001-84.353"></path><path data-name="Path 2" d="M104.704 104.704L4.95 4.95"></path></g></motion.svg>
  </div>
    
    </div>
    
    <motion.div className="new-container" key="DII" 
    transition={{ duration: 1.6, ease: "easeInOut" }} 
    exit={{ opacity: 0}} initial={{ x: -20, opacity: 0 }} 
    animate={{ x:0, opacity: 1 }}>

    <Projects />

    </motion.div>
{/*   <Navbar />
  <div className='w-8'>
    <motion.svg key="arrow" transition={{ duration: 0.6, ease: "easeInOut" }} exit={{ transform: 'translate(-100%, -100%)', opacity: 0}} initial={{ transform: 'translate(-100%, -100%)', opacity: 0 }} animate={{ transform: 'translate(0%, 0%)', opacity: 1 }} xmlns="http://www.w3.org/2000/svg" className="w-24" viewBox="0 0 157.381 157.38"><g data-name="Group 66" fill="none" stroke="currentColor" strokeWidth="14"><path data-name="Path 1" d="M20.352 104.704l84.352-.001.001-84.353"></path><path data-name="Path 2" d="M104.704 104.704L4.95 4.95"></path></g></motion.svg>
  </div> */}
{/*    <h2>Populate data</h2>
    { populate } */}
    

   {/* <TriggeredCallback/> */}


      
 
 



{/*     <motion.div className='project-wrapper' key="DII" 
    transition={{ duration: 1.6, ease: "easeInOut" }} 
    exit={{ opacity: 0}} initial={{ x: -20, opacity: 0 }} 
    animate={{ x:0, opacity: 1 }}>
      <Projects />
    </motion.div> */}
  



      

    </div>
  )
}

/* key={router.pathname} */