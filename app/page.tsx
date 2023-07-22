(import { Suspense } from 'react'
import { DataNews } from "../components/DataNews"
export const runtime = 'edge' // 'nodejs' (default) | 'edge'
async function getData() {
  // const res = await fetch('https://puppeteer-title.onrender.com/news', { cache: 'no-store' })
   const res = await fetch('https://node-news.vercel.app/news',{ cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
 
export default async function Home() {
  const noticias = await getData()
   return (
     <main className="min-h-screen sm:px-10 px-2 mb-4">
          <DataNews data={noticias}/>
    </main>
  )
}
