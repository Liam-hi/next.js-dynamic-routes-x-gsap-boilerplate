import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const names = [
    { name: 'Nima', id: 1 },
    { name: 'Li', id: 2 },
    { name: 'Lisa', id: 3 },
  ];

  const populate = names.map(x =>
    <Link key={x.id} href={`/${x.id}`}><li>
      {x.name}
    </li></Link>
  );

  return (
    <>
    <h1>Home</h1>
    <Navbar />
    { populate }
    </>
  )
}
