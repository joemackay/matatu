import Link from "next/link";
import PopularItem from "./popular-item";
import popular_data from '../../../mock/destinations.json'
import { useState } from "react";
import { cn } from "@/lib/utils" // helper for conditional classes
import { useSearchSelectionStore } from "@/store/search.store"

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
  const popular = popular_data.popular
  const[popularData, setPopularData] = useState(popular[0].items)
  const[selectedId, setSelectedId] = useState('')
  const { setStoreToDestination } = useSearchSelectionStore()

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
          href="/all"
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
        {/* <Link
          href="/all"
          className="rounded-xl bg-[#EDCEB2] px-3 py-0 font-medium text-black md:text-base"
        >
          <span>All</span>
        </Link>
        <Link
          href="/malls"
          className="rounded-xl bg-[#BF4209] px-3 py-0 font-medium  md:text-base"
        >
          <span>Malls</span>
        </Link>
        <Link
          href="/hotels"
          className="rounded-xl bg-[#EDCEB2] px-3 py-0 font-medium text-black md:text-base"
        >
          <span>Hotels</span>
        </Link>
        <Link
          href="/hospitals"
          className="rounded-xl bg-[#EDCEB2] px-3 py-0 font-medium text-black md:text-base"
        >
          <span>Hospitals</span>
        </Link>
        <Link
          href="/clubs"
          className="rounded-xl bg-[#EDCEB2] px-3 py-0 font-medium text-black md:text-base"
        >
          <span>Clubs</span>
        </Link> */}
      </div>
      <div className="flex flex-col">
        {popularData && popularData.map((place, index) => (
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