"use client"

import { ArrowRightFromLine, CirclePlus } from "lucide-react"
import { useEffect, useState } from "react"

type SearchBoxProps = {
  from: string;
  destination: string;
  onSearchFormFocused: (field: string)=>void,
  onSubmit: () => void
}

export default function SearchBox({from, destination, onSearchFormFocused, onSubmit}: SearchBoxProps) {
  const [fromDestination, setFromDestination] = useState("")
  const [toDestination, setToDestination] = useState("")
  const [activeField, setActiveField] = useState<"from" | "to" | null>(null)

  const handleSetFocus =(field: "from" | "to" | null)=> {
    if (field) {
      setActiveField(field)
      onSearchFormFocused(field)
    }
  }

  useEffect(() => {
    setFromDestination(from)
    setToDestination(destination)
  }, [from, destination])

  return (
    <div className="bg-[#EDCEB2] p-5 rounded-2xl shadow-xl m-6 z-50 relative">
      <div className="space-y-4">
        {/* FROM */}
        <div className="relative flex flex-row h-16 rounded-xl bg-white items-center">
          <div className="w-1/6 flex justify-center">
            <div className="h-10 w-10 flex justify-center items-center rounded-full bg-[#FCE8CF]">
              <ArrowRightFromLine height={20} width={20} className="text-[#BF4209]" />
            </div>
          </div>
          <div className="w-4/6 px-3 py-2">
            <div className="font-light text-md text-black">From</div>
            <input
              type="text"
              placeholder="Enter location"
              value={fromDestination}
              onChange={(e) => setFromDestination(e.target.value)}
              onFocus={() => handleSetFocus("from")}
              onBlur={() => setTimeout(() => handleSetFocus(null), 150)} // delay so clicks register
              className=" border border-white outline-none  text-black font-semibold"
            />
          </div>
          <div className="w-1/6 flex justify-center">
            <div className="h-10 w-10 flex justify-center items-center rounded-full bg-[#FCE8CF]">
              <CirclePlus height={20} width={20} className="text-[#BF4209]" />
            </div>
          </div>
          {/* {activeField === "from" && fromDestination && (
            <div className="absolute top-15 z-10 mt-1 w-full  max-h-40 overflow-y-auto">
              {filteredSuggestions(fromDestination).map((s, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setFromDestination(s)
                    handleSetFocus(null)
                  }}
                  className="px-3 py-2 mb-4 bg-white rounded-xl shadow hover:bg-gray-100 cursor-pointer text-[#59302C]"
                >
                  {s}
                </div>
              ))}
            </div>
          )} */}
        </div>

        {/* TO */}
        <div className="relative flex flex-row h-16 rounded-xl bg-white items-center">
         <div className="w-1/6 flex justify-center">
            <div className="h-10 w-10 flex justify-center items-center rounded-full bg-[#FCE8CF]">
              <ArrowRightFromLine height={20} width={20} className="text-[#BF4209]" />
            </div>
          </div>
          <div className="w-4/6 px-3 py-2">
            <div className="font-light text-md text-black">Destination</div>
            <input
              type="text"
              placeholder="Enter your destination"
              value={toDestination}
              onChange={(e) => setToDestination(e.target.value)}
              onFocus={() => handleSetFocus("to")}
              onBlur={() => setTimeout(() => handleSetFocus(null), 150)}
              className="border border-white outline-none text-black font-semibold"
            />
          </div>
          <div className="w-1/6 flex justify-center">
            <div className="h-10 w-10 flex justify-center items-center rounded-full bg-[#FCE8CF]">
              <CirclePlus height={20} width={20} className="text-[#BF4209]" />
            </div>
          </div>
          {/* {activeField === "to" && toDestination && (
            <ul className="absolute z-10 mt-1 w-full bg-white border rounded-xl shadow max-h-40 overflow-y-auto">
              {filteredSuggestions(toDestination).map((s, idx) => (
                <li
                  key={idx}
                  onClick={() => {
                    setToDestination(s)
                    handleSetFocus(null)
                  }}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {s}
                </li>
              ))}
            </ul>
          )} */}
        </div>

        <button
          className="w-full h-14 bg-[#59302C] text-white py-2 rounded-xl hover:bg-[#7f4540] text-lg font-bold"
          onClick={onSubmit}
        >
          Find My Matatu
        </button>
      </div>
    </div>
  )
}