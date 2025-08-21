"use client"

import { ArrowRightFromLine, CirclePlus } from "lucide-react"
import { useState } from "react"
const mockSuggestions = [
  "CBD, Nairobi",
  "Westlands",
  "Karen",
  "Kasarani",
  "JKIA",
  "Thika",
  "Rongai",
  "Kilimani",
]

export default function SearchBox() {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [activeField, setActiveField] = useState<"from" | "to" | null>(null)

  // Filtered suggestions
  const filteredSuggestions = (input: string) =>
    mockSuggestions.filter((s) =>
      s.toLowerCase().includes(input.toLowerCase())
    )

  return (
    <div className="bg-[#FCE8CF] space-y-4 p-6 rounded-2xl shadow">
      <form className="">
        {/* FROM */}
        <div className="relative flex flex-row h-16 mb-4 rounded-xl bg-white items-center">
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
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              onFocus={() => setActiveField("from")}
              onBlur={() => setTimeout(() => setActiveField(null), 150)} // delay so clicks register
              className=" border border-white outline-none  text-black font-semibold"
            />
          </div>
          <div className="w-1/6 flex justify-center">
            <div className="h-10 w-10 flex justify-center items-center rounded-full bg-[#FCE8CF]">
              <CirclePlus height={20} width={20} className="text-[#BF4209]" />
            </div>
          </div>
          {activeField === "from" && from && (
            <div className="absolute top-15 z-10 mt-1 w-full  max-h-40 overflow-y-auto">
              {filteredSuggestions(from).map((s, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setFrom(s)
                    setActiveField(null)
                  }}
                  className="px-3 py-2 mb-4 bg-white rounded-xl shadow hover:bg-gray-100 cursor-pointer text-[#59302C]"
                >
                  {s}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* TO */}
        <div className="relative flex flex-row h-16 mb-4 rounded-xl bg-white items-center">
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
              value={to}
              onChange={(e) => setTo(e.target.value)}
              onFocus={() => setActiveField("to")}
              onBlur={() => setTimeout(() => setActiveField(null), 150)}
              className="border border-white outline-none text-black font-semibold"
            />
          </div>
          <div className="w-1/6 flex justify-center">
            <div className="h-10 w-10 flex justify-center items-center rounded-full bg-[#FCE8CF]">
              <CirclePlus height={20} width={20} className="text-[#BF4209]" />
            </div>
          </div>
          {activeField === "to" && to && (
            <ul className="absolute z-10 mt-1 w-full bg-white border rounded-xl shadow max-h-40 overflow-y-auto">
              {filteredSuggestions(to).map((s, idx) => (
                <li
                  key={idx}
                  onClick={() => {
                    setTo(s)
                    setActiveField(null)
                  }}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          type="submit"
          className="w-full h-14 bg-[#59302C] text-white py-2 rounded-xl hover:bg-[#7f4540] text-lg font-bold"
        >
          Find My Matatu
        </button>
      </form>
    </div>
  )
}