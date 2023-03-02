

import Navbar from '@/components/Navbar';
import { productionBrowserSourceMaps } from '@/next.config';
import { useRouter } from 'next/router';
import React from 'react'
import data from '@/utils/data';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useIsPresent } from 'framer-motion';


export default function Details() {
  const router = useRouter();
  const ref = useRef();
  const isPresent = useIsPresent();
  ref.current = isPresent ? router.query.id : ref.current;
  const retrieveData = data.find((x) => x.id == ref.current);

  return (
    <div>
      <Navbar />
      <a className="explore">
        <span
          onClick={(e) => {
            router.back();
          }}
        >
          Back
        </span>
      </a>
      <h1>Retrieve data</h1>
      <h2>{retrieveData?.name}</h2>
    </div>
  );
}
