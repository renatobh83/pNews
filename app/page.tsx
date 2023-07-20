import { Suspense } from 'react'
import {DataNews } from "../components/DataNews"

import Loading from "./loading"
export const runtime = 'edge' // 'nodejs' (default) | 'edge'
async function getData() {
  const res = await fetch('https://puppeteer-title.onrender.com/news', { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
 



export default async function Home() {
  const notocias = await getData()
   return (
     <main className="min-h-screen sm:px-10 px-2 mb-4">
        <Suspense fallback={<Loading/>}>
           <DataNews data={notocias}/>
        </Suspense>
    </main>
  )
}
