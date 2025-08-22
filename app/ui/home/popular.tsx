import Link from "next/link";
import PopularItem from "./popular-item";
import popular_data from '../../../mock/destinations.json'
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils" // helper for conditional classes
import { useSearchSelectionStore } from "@/store/search.store"
import { PopularItemCardSkeleton } from "../skeletons";
import { PopularType } from "@/types/PopularType";

type PopularProps = {
  onSelectDestination: (destination: string) => void
}
const popular_links = [
  { name: "All", id: "all" },
  { name: "Malls", id: "malls" },
  { name: "Hotels", id: "hotels" },
  { name: "Hospitals", id: "hospitals" },
  { name: "Clubs", id: "clubs" },
]
export default function Popular({onSelectDestination}: PopularProps) {
  // const popular = popular_data.popular
  const[popularData, setPopularData] = useState<PopularType[]>([])
  const [loading, setLoading] = useState(true)
  const[selectedId, setSelectedId] = useState('')
  const { setStoreToDestination } = useSearchSelectionStore()

  useEffect(() => {
    // I use this to simulate API call delay
    const timer = setTimeout(() => {
      setPopularData(popular_data.popular[0].items) // load mock results
      setLoading(false)
    }, 1000) // 1 second

    return () => clearTimeout(timer)
  }, [])

  const handlePopularDestinationSelected =(destination: string)=> {
    onSelectDestination(destination)
    setStoreToDestination(destination)
  }

  const handleSelectPopularCategory = (id: string) => {
    if (id != null) {
      setSelectedId(id)
      const newCat = popular_data.popular.find(category => category.id === id)
      if (newCat) {
        setPopularData(newCat.items)
      }
    }
  }
  return (
    <div className="mt-6 p-6">
      <div className="flex flex-row justify-between items-center mb-4 text-lg">
        <span className="text-[#59302C] font-bold">Popular Places</span>
        <Link
          href="/popular"
          className="px-3 py-0 font-medium text-black md:text-base"
        >
          <span>See All</span>
        </Link>

      </div>
      <div className="flex flex-row justify-between items-center mb-4 text-sm">
        {popular_links.map((category, index) => (
          <div
            onClick={() => handleSelectPopularCategory(category.id)}
            key={index}
            className={cn(
              "rounded-xl px-3 py-0 font-medium text-black md:text-base",
              selectedId === category.id ? "bg-[#BF4209] text-white" : "bg-[#EDCEB2] text-black"
            )}
          >
            <span>{category.name}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        {loading ? 
        <>
          <div>
            {[...Array(5)].map((_, i) => (
              <PopularItemCardSkeleton key={i} />
            ))}
          </div>
        </> 
        :
        popularData && popularData.map((place, index) => (
          <PopularItem
            key={index}
            title={place.name}
            road={place.road}
            town={place.town}
            onClick={handlePopularDestinationSelected}
          />
        ))}
        
      </div>
    </div>
  )
}