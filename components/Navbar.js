import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const router = useRouter();
  return (
  <div className="navigation-bar">
    <div className='w-12'>
      <motion.p 
        key="nav" 
        exit={{transform: 'translateY(100%)'}} 
        initial={{opacity: 1}} 
        animate={{transform: 'translateY(0)'}} 
        transition={{ duration: 0.4, ease: "easeInOut" }} 
        className='link__text'
        >
          <Link className={router.pathname == "/" ? "active" : ""} href="/">Gallery</Link> / <Link className={router.pathname == "/about" ? "active" : ""} href="/about">Index</Link></motion.p>
      </div>
      <div className='w-12'>
        <motion.p 
          key="nav" 
          exit={{transform: 'translateY(100%)'}} 
          initial={{opacity: 1}} 
          animate={{transform: 'translateY(0)'}} 
          transition={{ duration: 0.4, ease: "easeInOut" }} 
          className='link__text '><Link href="/menu">Menu</Link></motion.p>
      </div>
      
    </div>
   
  )
}

