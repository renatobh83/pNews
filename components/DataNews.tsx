export function DataNews( { data }: { data: [{jornal: string, noticia:string}] }) {
  return (
    <>
    <div className="md:flex grid gap-2 flex-wrap justify-center mt-2">  
    {data?.map(valor  => (
          <div key={valor.noticia} className="max-w-sm px-2 sm:py-6 py-2 basis-30 grow
                          bg-white border border-gray-200  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-center space-x-4">
                <p className="text-lg tracking-wide font-medium text-gray-900 dark:text-white"><span className="uppercase text-gray-900 dark:text-white">
                  {valor.jornal}</span> - {valor.noticia}</p>
              </div>
            </div>
      ) as any)
    }
    </div>
    </>
    )
}
