"use client";

import { ChevronLeft, Goal, LandPlot } from "lucide-react";
import { useSearchSelectionStore } from "@/store/search.store"
import { useRouter } from "next/navigation";

export default function Map() {
  const router = useRouter();
  const fromDestination = useSearchSelectionStore((state)=>state.fromDestination)
  const toDestination = useSearchSelectionStore((state)=>state.toDestination)
  return (
    <div className="h-screen">
      <div className="bg-[#CC703D] p-6">
        <div className="flex justify-between items-center pt-6 mb-6">
          <div className="w-1/2">
            <div className="flex justify-center items-center h-10 w-10 rounded-full bg-white" onClick={() => router.back()}>
              <ChevronLeft className="h-6 w-6 text-[#CC703D]" />
            </div>
          </div>
          <div className="w-1/2 flex justify-end">
            <h1 className="text-xl font-semibold">Route Map</h1>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex flex-row">
            <div className="w-1/3 flex flex-row justify-between items-center">
              <div className="text-md font-bold">{fromDestination}</div>
              <div><Goal /></div>
            </div>
            <div className="w-1/3 px-2 flex justify-center items-center">
              <svg width="100" height="12" viewBox="0 0 100 12" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="6" x2="100" y2="6"
                      stroke="white" stroke-width="2"
                      stroke-dasharray="8 6" stroke-linecap="round"/>
              </svg>
            </div>
            <div className="w-1/3 flex flex-row justify-between items-center">
              <div><LandPlot /></div>
              <div className="text-md font-bold ps-4">{toDestination}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="w-96 h-96 flex justify-center rounded-xl text-white items-center bg-[#BF4209]">
          This Map will be added when I get the job
        </div>
      </div>
    </div>
  )
}