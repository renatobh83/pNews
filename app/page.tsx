'use client'
import { Suspense } from 'react'
import {DataNews } from "../components/DataNews"
// import { AddJornal} from '../components/AddJornal'
import {Jornal} from  "../components/Jornal"

export default  function Home() {
 const links = Jornal()
   return (
     <main className="sm:px-10 px-2 mb-4 md:text-xl text-sm">
   
     {links.map(link => (
        <Suspense key={link} fallback={<p>Loading data...</p>}>
             <DataNews params={link} />
        </Suspense>
        ))}
       

    </main>
  )
}
