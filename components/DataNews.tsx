"use client"
import useSWR from 'swr'


const fetcher = url => fetch(url, { cache: 'no-store' }).then(r => r.json())

export const runtime = 'edge' 

export async function DataNews({params}) {

const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}/news?url=${params}`, fetcher, { refreshInterval: 30000, refreshWhenHidden: true })
  return (
    <>
    <div className="py-2 ">  
    {data?.map(valor  => (
          <div key={valor.noticia} className="p-1">
              <div>
                <p className="tracking-wide">
                <span className="text-gray-500 font-bold">{valor.jornal}</span>  : {valor.noticia}
                  </p>
              </div>
            </div>
      ) as any)
    }
    </div>
    </>
    )
}
