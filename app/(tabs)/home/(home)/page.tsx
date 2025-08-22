"use client"

import Popular from "@/app/ui/home/popular";
import SearchBox from "@/app/ui/home/search_box";
import TopBar from "@/app/ui/home/top_bar";
import Welcome from "@/app/ui/home/welcome";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchSelectionStore  } from "@/store/search.store";


export default function Page() {
  const[destination, setDestination] = useState('')
  const[openSearchFormBottomSheet, setOpenSearchFormBottomSheet] = useState(false)
  const fromDestination = useSearchSelectionStore((state)=>state.fromDestination)
  const toDestination = useSearchSelectionStore((state)=>state.toDestination)

  const router = useRouter();

  const handleSetDestination =(destination:string) => {
    setDestination(destination)
    setOpenSearchFormBottomSheet(true)
    console.log('openSearchFormBottomSheet', openSearchFormBottomSheet)
  }

  const handleSearchFormFocussed =(field: string)=> {
    setOpenSearchFormBottomSheet(!!field)
    router.push(`/suggestions/${field}/`);
  }

  const handleSubmitSearch =()=> {
    console.log('handleSubmitSearch')
    router.push(`/search/`);
  }
  return (
    <div>
      <div className="bg-[#CC703D]">
        <TopBar />
        <Welcome />
      </div>
      <SearchBox
        from={fromDestination}
        destination={toDestination}
        onSearchFormFocused={handleSearchFormFocussed}
        onSubmit={handleSubmitSearch}
      />
      <Popular
        onSelectDestination={handleSetDestination}
      />

    </div>
  )
}