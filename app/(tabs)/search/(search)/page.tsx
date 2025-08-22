"use client"

import Link from "next/link"
import searchResults from "@/mock/search_results.json"
import { ChevronLeft, Link as LinkIcon, BusFront, LandPlot, Goal } from "lucide-react"
import SearchListItem from "@/app/ui/search/search-list-item"
import { useRouter } from "next/navigation";
import { useSearchSelectionStore } from "@/store/search.store"
import { useEffect, useState } from "react"

export default function SearchResultsPage() {
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const fromDestination = useSearchSelectionStore((state)=>state.fromDestination)
  const toDestination = useSearchSelectionStore((state)=>state.toDestination)
  const router = useRouter();

  
  useEffect(() => {
    // I use this to simulate API call delay
    const timer = setTimeout(() => {
      setResults(searchResults.results) // load mock results
      setLoading(false) // stop loader
    }, 3000) // 3 seconds

    return () => clearTimeout(timer)
  }, [])
  // const results = searchResults.results

  const handleSaccoSelected = (id: number) => {
    console.log('id', id)
    router.push(`/route/${id}`);
  }

  // if(loading) (
  //   <div>
  //     {/* Show loader/skeletons */}
  //     <p className="text-gray-500">Loading results...</p>
  //   </div>
  // ) 
  return (
    <div>

      
      <div className="bg-[#CC703D] p-6">
        <div className="flex justify-between items-center my-6">
          <div className="w-1/2">
            <div className="flex justify-center items-center h-10 w-10 rounded-full bg-white" onClick={() => router.back()}>
              <ChevronLeft className="h-6 w-6 text-[#CC703D]" />
            </div>
          </div>
          <div className="w-1/2 flex justify-end">
            <h1 className="text-xl font-semibold">Available Routes</h1>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/3 flex flex-row justify-between items-center">
            <div className="text-md font-bold">{fromDestination}</div>
            <div><Goal /></div>
          </div>
          <div className="w-1/3 px-2 flex justify-center items-center">
            <svg width="100" height="12" viewBox="0 0 100 12" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="6" x2="100" y2="6"
                    stroke="white" strokeWidth="2"
                    strokeDasharray="8 6" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="w-1/3 flex flex-row justify-between items-center">
            <div><LandPlot /></div>
            <div className="text-md font-bold ps-4">{toDestination}</div>
          </div>
        </div>
      </div>
      <div className="p-6">
        {results.map((result, index) => (
            // <Link
            //   key={index}
            //   href={`/home/routes/${result.id}`}
            //   className=""
            // >
              <SearchListItem
                key={index}
                result={result}
                onSaccoSelected={handleSaccoSelected}
              />
            // </Link>
        ))}
      </div>
    </div>
  )
}
