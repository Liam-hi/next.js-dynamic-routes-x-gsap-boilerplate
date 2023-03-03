import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const router = useRouter();
  return (
  <div className="navigation-bar">

    <div className='w-8'>
        <motion.svg key="arrow" transition={{ duration: 0.6, ease: "easeInOut" }} exit={{ opacity: 0, transform: 'translateY(100%)'}} initial={{ transform: 'translateY(100%)', opacity: 0 }} animate={{ transform: 'translateY(0%)', opacity: 1 }} enable-background="new 0 0 212.9 35.7" height="35.7" viewBox="0 0 212.9 35.7" width="212.9" xmlns="http://www.w3.org/2000/svg"><g fill="#ed1e25"><path d="m12.6 16-1.3-3.5h-7l-1.2 3.5h-3.1l6.1-16h3.5l6.2 16zm-7.3-6.1h5.2l-.7-1.8c-.5-1.3-1.2-3.1-2-5.4-.6 1.9-1.3 3.7-2 5.5z"/><path d="m26.3 5.2c.7.7 1.1 1.8 1.1 3.1v7.7h-2.8v-7.2c0-1.5-.7-2.2-2.2-2.2-.7 0-1.3.3-1.8.8s-.8 1.2-.8 2.1v6.5h-2.8v-11.6h2.7v1.7c.9-1.3 2.1-1.9 3.6-1.9 1.3-.1 2.3.3 3 1z"/><path d="m37.9 0h2.8v16h-2.7v-1.6c-.9 1.3-2.1 1.9-3.7 1.9s-2.9-.6-3.8-1.7-1.4-2.6-1.4-4.4c0-1.9.5-3.3 1.4-4.4s2.2-1.6 3.8-1.6 2.7.6 3.6 1.8zm-2.9 13.9c.9 0 1.7-.3 2.2-1 .5-.6.8-1.6.8-2.8s-.3-2.1-.8-2.8-1.3-1-2.2-1-1.6.3-2.2 1c-.5.8-.8 1.8-.8 3s.3 2.1.8 2.7 1.3.9 2.2.9z"/><path d="m53.9 11.1h-8.7c.1 1 .4 1.7.9 2.2s1.2.8 2.1.8c1.3 0 2.2-.6 2.6-1.7h2.7c-.3 1.2-.9 2.1-1.9 2.8s-2.1 1-3.5 1c-1.7 0-3.1-.6-4.2-1.7s-1.6-2.6-1.6-4.4.5-3.3 1.6-4.4 2.4-1.7 4.1-1.7 3.1.6 4.2 1.7 1.5 2.7 1.5 4.5v.9zm-8.6-2h5.8c-.1-.9-.4-1.5-.9-2s-1.2-.7-2-.7c-1.7-.1-2.6.8-2.9 2.7z"/><path d="m62.6 4.3v2.6h-.7c-1.1 0-1.9.3-2.5.8s-.9 1.3-.9 2.4v5.9h-2.8v-11.6h2.7v2.1c.6-1.5 1.8-2.2 3.5-2.2.3-.1.5-.1.7 0z"/><path d="m63.2 12.3h2.8c.1.7.3 1.2.7 1.5s1 .4 1.9.4c1.5 0 2.3-.5 2.3-1.4 0-.4-.2-.7-.5-1-.3-.2-.9-.4-1.8-.6l-1.3-.2c-2.5-.4-3.8-1.6-3.8-3.5 0-1.1.4-1.9 1.3-2.6s2-.9 3.5-.9c3.3 0 5 1.3 5.1 3.9h-2.7c0-.7-.2-1.2-.6-1.5s-1-.4-1.8-.4c-1.3 0-2 .4-2 1.3 0 .4.1.7.4.9s.8.4 1.5.5l1.5.2c1.4.3 2.4.7 3.1 1.2.6.6 1 1.3 1 2.3 0 1.2-.4 2.1-1.3 2.7s-2.2.9-3.8.9c-3.6.3-5.4-1.1-5.5-3.7z"/><path d="m80.5 16.2c-1.8 0-3.2-.6-4.3-1.7s-1.6-2.6-1.6-4.4.5-3.3 1.6-4.4 2.5-1.7 4.3-1.7 3.2.5 4.3 1.6 1.6 2.6 1.6 4.4-.5 3.3-1.6 4.4c-1.2 1.3-2.6 1.8-4.3 1.8zm2.2-3.3c.5-.7.8-1.6.8-2.7s-.3-2.1-.8-2.7-1.3-1-2.2-1-1.7.3-2.2 1-.8 1.6-.8 2.8.3 2.1.8 2.8c.5.6 1.3 1 2.2 1s1.6-.5 2.2-1.2z"/><path d="m97.4 5.2c.7.7 1.1 1.8 1.1 3.1v7.7h-2.8v-7.2c0-1.5-.7-2.2-2.2-2.2-.7 0-1.3.3-1.8.8s-.8 1.2-.8 2.1v6.5h-2.8v-11.6h2.7v1.7c.9-1.3 2.1-1.9 3.6-1.9 1.3-.1 2.3.3 3 1z"/><path d="m113.4 0h4.4v16h-2.9v-4.9c0-3 0-5.6.1-7.9-.3 1.1-.7 2.3-1.2 3.7l-3.2 9.1h-2.6l-3.2-9.1c-.6-1.7-1-2.9-1.2-3.6.1 2.3.1 4.9.1 7.9v4.8h-2.9v-16h4.4l2.8 7.8c.2.5.6 2 1.4 4.3.5-1.7.9-3.2 1.4-4.5z"/><path d="m127.7 16c-.1-.2-.2-.7-.3-1.4-.8 1.1-2 1.7-3.7 1.7-1.3 0-2.3-.3-3-.9-.8-.6-1.1-1.5-1.1-2.6 0-2.1 1.5-3.3 4.4-3.6l1.7-.2c.6-.1 1-.2 1.3-.4s.4-.5.4-.9c0-.5-.2-.9-.5-1.1s-.9-.3-1.6-.3c-.8 0-1.4.1-1.8.4s-.6.8-.6 1.4h-2.9c.2-2.6 1.9-3.9 5.2-3.9 3.2 0 4.8 1.2 4.8 3.5v6.2c0 1 .2 1.7.5 2.2h-2.8zm-1.3-2.5c.6-.5.8-1.2.8-2.1v-1.1c-.3.2-.7.4-1.3.5l-1.5.2c-.7.1-1.3.3-1.6.5-.3.3-.5.6-.5 1.1s.2.9.5 1.2.8.4 1.4.4c1 0 1.7-.2 2.2-.7z"/><path d="m131.5 12.3h2.8c.1.7.3 1.2.7 1.5s1 .4 1.9.4c1.5 0 2.3-.5 2.3-1.4 0-.4-.2-.7-.5-1-.3-.2-.9-.4-1.8-.6l-1.3-.2c-2.5-.4-3.8-1.6-3.8-3.5 0-1.1.4-1.9 1.3-2.6s2-.9 3.5-.9c3.3 0 5 1.3 5.1 3.9h-2.7c0-.7-.2-1.2-.6-1.5s-1-.4-1.8-.4c-1.3 0-2 .4-2 1.3 0 .4.1.7.4.9s.8.4 1.5.5l1.5.2c1.4.3 2.4.7 3.1 1.2.6.6 1 1.3 1 2.3 0 1.2-.4 2.1-1.3 2.7s-2.2.9-3.8.9c-3.6.3-5.3-1.1-5.5-3.7z"/><path d="m148.8 16.2c-1.8 0-3.2-.6-4.3-1.7s-1.6-2.6-1.6-4.4.5-3.3 1.6-4.4 2.5-1.7 4.3-1.7 3.2.5 4.3 1.6 1.6 2.6 1.6 4.4-.5 3.3-1.6 4.4c-1.1 1.3-2.5 1.8-4.3 1.8zm2.2-3.3c.5-.7.8-1.6.8-2.7s-.3-2.1-.8-2.7-1.3-1-2.2-1-1.7.3-2.2 1-.8 1.6-.8 2.8.3 2.1.8 2.8c.5.6 1.3 1 2.2 1s1.7-.5 2.2-1.2z"/><path d="m165.8 5.2c.7.7 1.1 1.8 1.1 3.1v7.7h-2.9v-7.2c0-1.5-.7-2.2-2.2-2.2-.7 0-1.3.3-1.8.8s-.8 1.2-.8 2.1v6.5h-2.8v-11.6h2.7v1.7c.9-1.3 2.1-1.9 3.6-1.9 1.3-.1 2.3.3 3.1 1z"/><path d="m175.2 0c2.6 0 4.5.7 5.9 2.1s2.1 3.4 2.1 5.9-.7 4.4-2.1 5.8-3.4 2.2-5.9 2.2h-6.1v-16zm0 13.4c1.6 0 2.8-.5 3.6-1.4.9-.9 1.3-2.3 1.3-4s-.4-3.1-1.3-4-2.1-1.4-3.6-1.4h-3v10.8z"/><path d="m192.4 16c-.1-.2-.2-.7-.3-1.4-.8 1.1-2 1.7-3.7 1.7-1.3 0-2.3-.3-3-.9-.8-.6-1.1-1.5-1.1-2.6 0-2.1 1.5-3.3 4.4-3.6l1.7-.2c.6-.1 1-.2 1.3-.4s.4-.5.4-.9c0-.5-.2-.9-.5-1.1s-.9-.3-1.6-.3c-.8 0-1.4.1-1.8.4s-.6.8-.6 1.4h-2.8c.2-2.6 1.9-3.9 5.2-3.9 3.2 0 4.8 1.2 4.8 3.5v6.2c0 1 .2 1.7.5 2.2h-2.9zm-1.2-2.5c.6-.5.8-1.2.8-2.1v-1.1c-.3.2-.7.4-1.3.5l-1.5.2c-.7.1-1.3.3-1.6.5-.3.3-.5.6-.5 1.1s.2.9.5 1.2.8.4 1.4.4c.9 0 1.7-.2 2.2-.7z"/><path d="m196.9 16v-16h2.8v16z"/><path d="m212.9 11.1h-8.7c.1 1 .4 1.7.9 2.2s1.2.8 2.1.8c1.3 0 2.2-.6 2.6-1.7h2.7c-.3 1.2-.9 2.1-1.9 2.8s-2.1 1-3.5 1c-1.7 0-3.1-.6-4.2-1.7s-1.6-2.6-1.6-4.4.5-3.3 1.6-4.4 2.4-1.7 4.1-1.7 3.1.6 4.2 1.7 1.5 2.7 1.5 4.5v.9zm-8.7-2h5.8c-.1-.9-.4-1.5-.9-2s-1.2-.7-2-.7c-1.6-.1-2.6.8-2.9 2.7z"/></g><path d="m12.6 35.4-1.3-3.5h-7l-1.2 3.5h-3.1l6.1-16h3.5l6.2 16zm-7.3-6.1h5.2l-.6-1.7c-.5-1.3-1.2-3.2-2-5.5-.6 1.9-1.3 3.7-2 5.5z"/><path d="m23.8 23.7v2.6h-.7c-1.1 0-1.9.3-2.5.8s-.9 1.3-.9 2.4v5.9h-2.7v-11.6h2.7v2.1c.6-1.5 1.8-2.2 3.5-2.2z"/><path d="m25.9 34c-1-1.1-1.6-2.6-1.6-4.4 0-1.9.5-3.3 1.6-4.4 1-1.1 2.4-1.6 4.1-1.6 1.5 0 2.7.4 3.7 1.2s1.5 1.9 1.7 3.2h-2.8c-.1-.7-.4-1.2-.9-1.5-.4-.4-1-.5-1.7-.5-.9 0-1.6.3-2.1 1-.5.6-.8 1.6-.8 2.7 0 1.2.3 2.1.8 2.7s1.2 1 2.1 1c.7 0 1.3-.2 1.7-.6s.8-.9.9-1.6h2.8c-.1 1.4-.7 2.5-1.7 3.3s-2.2 1.2-3.7 1.2c-1.6 0-3-.6-4.1-1.7z"/><path d="m46.3 24.7c.7.7 1.1 1.8 1.1 3.1v7.7h-2.8v-7.2c0-1.5-.7-2.2-2.2-2.2-.7 0-1.3.3-1.8.8s-.8 1.2-.8 2.1v6.5h-2.8v-16h2.8v5.9c.9-1.2 2.1-1.8 3.5-1.8 1.3 0 2.3.3 3 1.1z"/><path d="m49.7 35.4v-11.6h2.8v11.6zm0-13.1v-2.6h2.8v2.6z"/><path d="m60.8 26h-2.3v6.3c0 .4.1.6.3.8s.5.2 1 .2h1v2.2c-.6.1-1.1.1-1.5.1-1.3 0-2.2-.2-2.7-.7-.6-.5-.9-1.2-.9-2.3v-6.6h-1.7v-2.2h1.8v-3.4h2.8v3.4h2.3v2.2z"/><path d="m73.2 30.5h-8.7c.1 1 .4 1.7.9 2.2s1.2.8 2.1.8c1.3 0 2.2-.6 2.6-1.7h2.7c-.2 1.2-.8 2.1-1.8 2.8s-2.1 1-3.5 1c-1.7 0-3.1-.6-4.2-1.7s-1.6-2.6-1.6-4.4.5-3.3 1.6-4.4 2.4-1.7 4.1-1.7 3.1.6 4.2 1.7 1.5 2.7 1.5 4.5v.9zm-8.6-2h5.8c-.1-.9-.4-1.5-.9-2s-1.2-.7-2-.7c-1.7 0-2.7.9-2.9 2.7z"/><path d="m76.1 34c-1-1.1-1.6-2.6-1.6-4.4 0-1.9.5-3.3 1.6-4.4 1-1.1 2.4-1.6 4.1-1.6 1.5 0 2.7.4 3.7 1.2s1.5 1.9 1.7 3.2h-2.8c-.1-.7-.4-1.2-.9-1.5-.4-.4-1-.5-1.7-.5-.9 0-1.6.3-2.1 1-.5.6-.8 1.6-.8 2.7 0 1.2.3 2.1.8 2.7s1.2 1 2.1 1c.7 0 1.3-.2 1.7-.6.5-.4.8-.9.9-1.6h2.8c-.1 1.4-.7 2.5-1.7 3.3s-2.2 1.2-3.7 1.2c-1.7 0-3.1-.6-4.1-1.7z"/><path d="m92.9 26h-2.3v6.3c0 .4.1.6.3.8s.5.2 1 .2h1v2.2c-.6.1-1.1.1-1.5.1-1.3 0-2.2-.2-2.7-.7-.6-.5-.9-1.2-.9-2.3v-6.6h-1.8v-2.2h1.8v-3.4h2.8v3.4h2.3z"/><path d="m93.8 31.7h2.8c.1.7.3 1.2.7 1.5s1 .4 1.9.4c1.5 0 2.3-.5 2.3-1.4 0-.4-.2-.7-.5-1-.3-.2-.9-.4-1.8-.6l-1.3-.2c-2.5-.4-3.8-1.6-3.8-3.5 0-1.1.4-1.9 1.3-2.6.8-.6 2-.9 3.5-.9 3.3 0 5 1.3 5.1 3.9h-2.7c0-.7-.2-1.2-.6-1.5s-1-.4-1.8-.4c-1.3 0-2 .4-2 1.3 0 .4.1.7.4.9s.8.4 1.5.5l1.5.2c1.4.3 2.4.7 3.1 1.2.6.6 1 1.3 1 2.3 0 1.2-.4 2.1-1.3 2.7s-2.2.9-3.8.9c-3.6.3-5.3-1-5.5-3.7z"/></motion.svg>
      </div>
    <div className='w-12'>
      <motion.p 
        key="nav" 
        exit={{transform: 'translateY(100%)'}} 
        initial={{opacity: 1}} 
        animate={{transform: 'translateY(0)'}} 
        transition={{ duration: 0.6, ease: "easeInOut" }} 
        className='link__text'
        ><Link className={router.pathname == "/" ? "active" : ""} href="/">Design</Link></motion.p>
        
        <motion.p 
        key="nav" 
        exit={{transform: 'translateY(100%)'}} 
        initial={{opacity: 1}} 
        animate={{transform: 'translateY(0)'}} 
        transition={{ duration: 0.6, ease: "easeInOut" }} 
        className='link__text'
        ><Link className={router.pathname == "/about" ? "active" : ""} href="/about">Studio</Link></motion.p>
        
{/*         <motion.p 
          key="nav" 
          exit={{transform: 'translateY(100%)'}} 
          initial={{opacity: 1}} 
          animate={{transform: 'translateY(0)'}} 
          transition={{ duration: 0.6, ease: "easeInOut" }} 
          className='link__text '><Link href="/menu">Menu</Link></motion.p> */}

          <motion.svg 
          key="nav" 
          exit={{transform: 'translateY(100%)'}} 
          initial={{opacity: 1}} 
          animate={{transform: 'translateY(0)'}} 
          transition={{ duration: 0.6, ease: "easeInOut" }} 
          width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" width="1" height="50" fill="black"/>
          <rect x="50" y="24" width="1" height="50" transform="rotate(90 50 24)" fill="black"/>
          </motion.svg>

          



          
    
      </div>

      

      
    </div>
   
  )
}

