import { productionBrowserSourceMaps } from '@/next.config';
import { useRouter } from 'next/router';
import React from 'react'

export default function Details() {
    const data = [
        { name: 'Nima', id: 1 },
        { name: 'Li', id: 2 },
        { name: 'Lisa', id: 3 },
    ];
    const router = useRouter();
    
    /* console.log(router.pathname); */
    /* console.log(router.query.id); */

    const retrieveData = data.find(x => x.id == router.query.id);
    
  return (
    <div>
        <h1>Details</h1>
        <h1>{retrieveData.name}</h1>
      
    </div>
  )
}
