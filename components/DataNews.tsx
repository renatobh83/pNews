"use client";
export function DataNews( { data }: { data: string[] }) {
  return (
    <>
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
    <div>Noticias</div>
    <div className="flex gap-3">

    </div>  
    </div>
    <div className="md:flex grid gap-2 flex-wrap justify-center">  
    {data?.map(valor  => (
          <div key={valor.noticia} className="max-w-sm px-2 sm:py-6 py-2 basis-30 grow
                          bg-white border border-gray-200  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-center space-x-4">
                <p className="text-lg font-medium text-gray-900 dark:text-white"><span className="uppercase text-red-600">{valor.jornal}</span> - {valor.noticia}</p>
              </div>
            </div>
      ) as any)
    }
    </div>
    </>
    )
}
