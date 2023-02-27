import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="navigation-bar">
      <Link href="/"><p>Gallery</p></Link>
      <Link href="/about"><p>Index</p></Link>
    </div>
  )
}
