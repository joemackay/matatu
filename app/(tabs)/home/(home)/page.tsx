"use client"

import Popular from "@/app/ui/home/popular";
import SearchBox from "@/app/ui/home/search_box";
import TopBar from "@/app/ui/home/top_bar";
import Welcome from "@/app/ui/home/welcome";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchSelectionStore  } from "@/store/search.store";
import ConfirmAlert from "@/app/ui/alert";


export default function Page() {
  const[destination, setDestination] = useState('')
  const[openSearchFormBottomSheet, setOpenSearchFormBottomSheet] = useState(false)
  const[showRouteValidationAlert, setShowRouteValidationAlert] = useState(false)

  const fromDestination = useSearchSelectionStore((state)=>state.fromDestination)
  const toDestination = useSearchSelectionStore((state)=>state.toDestination)

  const router = useRouter();
  console.log('destination', destination)
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
    if(fromDestination === toDestination) {
      setShowRouteValidationAlert(true)
    } else {
      router.push(`/search/`);
    }
  }
  return (
    <div>
      <div className="relative">
        <div className="bg-[#CC703D] absolute top-0 left-0 right-0 h-84 w-full">
        </div>
        <TopBar />
        <Welcome />
      
        <SearchBox
          from={fromDestination}
          destination={toDestination}
          onSearchFormFocused={handleSearchFormFocussed}
          onSubmit={handleSubmitSearch}
        />
      </div>
      <Popular
        onSelectDestination={handleSetDestination}
      />

      {/* {showAlert && */}
        <ConfirmAlert 
          open={showRouteValidationAlert}
          setOpen={() => setShowRouteValidationAlert(false)}
          title={"Select a different route"}
          message={"Your Start and Stop destinations are the same"}
          onContinue={()=> null} 
          onCancel={()=> null} />
      {/* } */}

    </div>
  )
}