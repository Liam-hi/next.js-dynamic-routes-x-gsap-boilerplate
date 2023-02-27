import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <h1>Navigation bar</h1>
      <Link href="/"><p>Static route 1</p></Link>
      <Link href="/about"><p>Static route 2</p></Link>
    </div>
  )
}
