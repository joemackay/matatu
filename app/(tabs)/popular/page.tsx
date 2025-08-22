"use client"

import PopularItem from "../../ui/home/popular-item";
import popular_data from '../../../mock/destinations.json'
import { useState } from "react";
import { cn } from "@/lib/utils" // helper for conditional classes
import { useSearchSelectionStore } from "@/store/search.store"
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
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
      if(id==="all") {
        const popular = popular_data.popular.map(category => category.items).flat()
        setPopularData(popular)
      } else {
        const newCat = popular_data.popular.find(category => category.id === id)
        if (newCat) {
          setPopularData(newCat.items)
        }
      }
    }
  }
  return (
    <div className="">
      <div className="bg-[#CC703D] p-6">
        <div className="flex justify-between items-center pt-6 mb-6">
          <div className="w-1/2">
            <div className="flex justify-center items-center h-10 w-10 rounded-full bg-white" onClick={() => router.back()}>
              <ChevronLeft className="h-6 w-6 text-[#CC703D]" />
            </div>
          </div>
          <div className="w-1/2 flex justify-end">
            <h1 className="text-xl font-semibold">Popular Places</h1>
          </div>
        </div>
      </div>
      <div className="mt-6 p-6">
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
    </div>
  )
}