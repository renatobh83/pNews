"use client"
import useSWR from 'swr'


const fetcher = url => fetch(url, { cache: 'no-store' }).then(r => r.json())

export const runtime = 'edge' 

export async function DataNews({params} : string) {

const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}/news?url=${params}`, fetcher, { refreshInterval: 40000, refreshWhenHidden: true })
  return (
    <>
    <div >  
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
