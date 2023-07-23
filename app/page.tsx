import {DataNews } from "../components/DataNews"

export default function Home(params) {
   return (
     <main className="sm:px-10 px-2 mb-4 md:text-xl text-sm">
           <DataNews params={params}/>
    </main>
  )
}
