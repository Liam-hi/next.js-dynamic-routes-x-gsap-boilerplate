import Navbar from '@/components/Navbar'
import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router';

export default function About() {
  console.log("About:", useRouter().asPath);
  return (
    <div>
        <Navbar />
        <h1>About page or whatever</h1>
    </div>
  )
}
