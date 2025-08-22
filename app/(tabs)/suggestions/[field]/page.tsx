"use client"
import { useState } from "react";
import { ArrowRightFromLine, ChevronLeft, CirclePlus, CircleX, Goal, LandPlot } from "lucide-react";
import destinationsData from '@/mock/destinations.json'
import PopularItem from "@/app/ui/home/popular-item"
import { useSearchSelectionStore } from "@/store/search.store"
import router from "next/router";
import { useParams, useRouter } from "next/navigation";

type FormSuggestionsProps = {
  open: boolean;
}
export default function FormSuggestionsPage({}) {
  const { field: fieldToEdit } = useParams<{ field: string }>();
  const [fromDestination, setFromDestination] = useState("")
  const [toDestination, setToDestination] = useState("")
  const [activeField, setActiveField] = useState<"from" | "to" | null>(null)
  const router = useRouter();

  console.log('field', fieldToEdit)

  const { setStoreFromDestination, setStoreToDestination } = useSearchSelectionStore()

  const destinations = destinationsData.popular.map(category => category.items).flat()
  // console.log(destinations)

  const filteredSuggestions = (input: string) =>
    destinations.filter((s) =>
      s.name.toLowerCase().includes(input.toLowerCase())
    )
  // bg-[#FCE8CF]
  return (
    <div>
      <div className="">
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
        </div>
        <div className="form-containter bg-[#EDCEB2] p-6 rounded-2xl shadow m-6 mb-4">
          <form className="space-y-6">
            {/* FROM */}
            {fieldToEdit==="from" &&
              <div className="flex flex-row h-16 rounded-xl bg-white items-center">
                <div className="w-1/6 flex justify-center">
                  <div className="h-10 w-10 flex justify-center items-center rounded-full bg-[#FCE8CF]">
                    <ArrowRightFromLine height={20} width={20} className="text-gray-600" />
                  </div>
                </div>
                <div className="w-4/6 px-3 py-2">
                  <div className="font-light text-md text-black">From</div>
                  <input
                    type="text"
                    placeholder="Enter location"
                    value={fromDestination}
                    onChange={(e) => setFromDestination(e.target.value)}
                    onFocus={() => setActiveField("from")}
                    onBlur={() => setTimeout(() => setActiveField(null), 150)} // delay so clicks register
                    className=" border border-white outline-none  text-black font-semibold"
                  />
                </div>
                <div className="w-1/6 flex justify-center">
                  <div className="h-10 w-10 flex justify-center items-center rounded-full bg-[#FCE8CF]">
                    {fromDestination ?
                      <CircleX height={20} width={20} className="text-gray-600" onClick={()=>setFromDestination('')} />
                    :
                      <CirclePlus height={20} width={20} className="text-[#BF4209]" />
                    }
                  </div>
                </div>
              </div>
            }

            {/* TO */}
            {fieldToEdit==="to" &&
              <div className="flex flex-row h-16 rounded-xl bg-white items-center">
                <div className="w-1/6 flex justify-center">
                  <div className="h-10 w-10 flex justify-center items-center rounded-full bg-[#FCE8CF]">
                    <ArrowRightFromLine height={20} width={20} className="text-gray-600" />
                  </div>
                </div>
                <div className="w-4/6 px-3 py-2">
                  <div className="font-light text-md text-black">Destination</div>
                  <input
                    type="text"
                    placeholder="Enter your destination"
                    value={toDestination}
                    onChange={(e) => setToDestination(e.target.value)}
                    onFocus={() => setActiveField("to")}
                    onBlur={() => setTimeout(() => setActiveField(null), 150)}
                    className="border border-white outline-none text-black font-semibold"
                  />
                </div>
                <div className="w-1/6 flex justify-center">
                  <div className="h-10 w-10 flex justify-center items-center rounded-full bg-[#FCE8CF]">
                    {toDestination ?
                      <CircleX height={20} width={20} className="text-gray-600" onClick={()=>setToDestination('')} />
                    :
                      <CirclePlus height={20} width={20} className="text-[#BF4209]" />
                    }
                  </div>
                </div>
                
              </div>
            }
          </form>
        </div>

        <div className="results-container space-y-4 m-6">
        {activeField === "from" && fromDestination && (
          <div className="z-10 mt-1 w-full max-h-96 overflow-y-auto">
            {filteredSuggestions(fromDestination).map((s, idx) => (
              <PopularItem
                key={idx} 
                title={s.name} 
                road={s.road} 
                town={s.town} 
                onClick={() => {
                  setFromDestination(s.name)
                  setStoreFromDestination(s.name)
                  setActiveField(null)
                  router.back()
                }}
              />
            ))}
          </div>
        )}
        {activeField === "to" && toDestination && (
          <div className="z-10 mt-1 w-full max-h-96 overflow-y-auto">
            {filteredSuggestions(toDestination).map((s, idx) => (
              // <div
              //   key={idx}
              //   onClick={() => {
              //     setToDestination(s.name)
              //     setActiveField(null)
              //   }}
              //   className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              // >
              //   {s.name}
              // </div>
              <PopularItem
                key={idx} 
                title={s.name} 
                road={s.road} 
                town={s.town} 
                onClick={() => {
                  setToDestination(s.name)
                  setStoreToDestination(s.name)
                  setActiveField(null)
                  router.back()
                }}
                />
            ))}
          </div>
        )}
        </div>
      </div>
    </div>
  )
}