"use client"
import useSWR from 'swr'

const fetcher = url => fetch(url, { method: "POST" }).then(r => r.json())
export const runtime = 'edge' 

export async function DataNews() {
    const { data, error, isLoading } = useSWR('https://node-news.vercel.app/news', fetcher, { refreshInterval: 40000, refreshWhenHidden: true })


  if(isLoading) {
    return <p>Loading...</p>
  }

  return (
    <>
    <div >  
          {/*<div className="flex justify-between"><Reload /></div>*/}
    {data?.map(valor  => (
          <div key={valor.noticia} className="p-2">
              <div>
                <p>
                <span>{valor.jornal}</span>  : {valor.noticia}
                  </p>
              </div>
            </div>
      ) as any)
    }
    </div>
    </>
    )
}
