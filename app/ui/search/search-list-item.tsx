import { SearchResult } from "@/types/SearchResult";
import { BusFront, LinkIcon, Clock4, MoveRight, CircleDot, CircleCheckBig, MapPin, HandCoins, Link, Watch } from "lucide-react";
import { useEffect, useState } from "react";

type SearchResultProps = {
  result: SearchResult;
  onSaccoSelected: (item_id: number) => void;
} 

export default function SearchListItem({result, onSaccoSelected}: SearchResultProps) {
  const [itemClicked, setItemClicked] = useState(false)

  const handleItemClicked = (status: boolean) => {
    setItemClicked(status)
  }

  if(itemClicked) {
    return (
      <div className="flex flex-col mb-4" onClick={() => onSaccoSelected(result.id)}>
        <div className="item-title flex flex-row rounded-lg bg-white p-4 hover:bg-gray-50 border-b-2 border-dashed">
          <div className="w-[10%]"><BusFront height={20} width={20} className="text-black" /></div>
          <div className="w-[60%]"><span className="text-[#59302C] font-semibold">{result.sacco_name}</span></div>
          <div className="w-[20%] flex justify-end"><span className="text-[#59302C]">{result.route_number}</span></div>
        </div>
        <div className="item-title flex flex-col rounded-lg bg-white p-4 hover:bg-gray-50">
          <div className="flex flex-row mb-2">
            <div className="w-[10%]"><MapPin height={20} width={20} className="text-[#BF4209]" /></div>
            <div className="w-[30%]"><span className="text-[#59302C]">Location</span></div>
            <div className="w-[60%] flex justify-end"><span className="text-[#59302C] font-semibold">{result.pickup_location}</span></div>
          </div>
          <div className="flex flex-row mb-2">
            <div className="w-[10%]"><Clock4 height={20} width={20} className="text-[#BF4209]" /></div>
            <div className="w-[30%]"><span className="text-[#59302C]">Travel time</span></div>
            <div className="w-[60%] flex justify-end"><span className="text-[#59302C] font-semibold">{result.startTime} - {result.endTime}| {result.travel_duration}</span></div>
          </div>
          <div className="flex flex-row mb-2">
            <div className="w-[10%]"><HandCoins height={20} width={20} className="text-[#BF4209]" /></div>
            <div className="w-[30%]"><span className="text-[#59302C]">Estimated fare</span></div>
            <div className="w-[60%] flex justify-end"><span className="text-[#59302C] font-semibold">{result.fare} - 100 KES</span></div>
          </div>
          <div className="flex flex-row mb-2">
            <div className="w-[10%]"><Watch height={20} width={20} className="text-[#BF4209]" /></div>
            <div className="w-[30%]"><span className="text-[#59302C]">Pick Hours</span></div>
            <div className="w-[60%] flex justify-end"><span className="text-[#59302C] font-semibold">{result.pickup_start_time} - {result.pickup_end_time}</span></div>
          </div>
          <div className="flex flex-row mb-2">
            <div className="w-[10%]"><Link height={20} width={20} className="text-[#BF4209]" /></div>
            <div className="w-[30%]"><span className="text-[#59302C]">Connections</span></div>
            <div className="w-[60%] flex justify-end"><span className="text-[#59302C] font-semibold">1</span></div>
          </div>
        </div>
      </div>
      
    )
  }
  return (
    <div className="flex flex-col bg-white shadow rounded-xl p-4 hover:bg-gray-50 mb-4" onClick={() => handleItemClicked(true)}>
      <div className="flex flex-row items-center mb-2">
        <div className="w-[10%]">
          <BusFront height={20} width={20} className="text-[#BF4209]" />
        </div>
        <div className="w-[40%]">
          <span className="text-[#59302C] font-semibold">{result.sacco_name}</span>
        </div>
        <div className="w-[40%]">
          <span className="text-[#59302C] font-semibold">{result.route_number}</span>
        </div>
        <div className="w-[10%] flex flex-row justify-between">
          <LinkIcon height={20} width={20} className="text-[#BF4209]" /> <span className="text-[#59302C] font-semibold">{result.connections}</span>
        </div>
      </div>

      <div className="flex flex-row items-center mb-2">
        <div className="w-[10%]">
          <Clock4 height={20} width={20} className="text-[#BF4209]" />
        </div>
        <div className="w-[60%]">
          <span className="text-[#59302C] font-light">Travel time</span>
        </div>
        <div className="w-[30%] flex justify-end">
          <span className="text-[#59302C] font-semibold">{result.travel_duration}</span>
        </div>
      </div>
      <div className="flex flex-row justify-start items-center gap-2">
        <CircleDot height={20} width={20} className="text-[#BF4209]" />
        <MoveRight height={20} width={20} className="text-[#BF4209]" />
        <div className="flex flex-row">
          <BusFront height={20} width={20} className="text-[#BF4209]" />
          <span className="ps-2 text-[#59302C] font-bold">46H</span>
        </div>
        <MoveRight height={20} width={20} className="text-[#BF4209]" />
        <div className="flex flex-row">
          <BusFront height={20} width={20} className="text-[#BF4209]" />
          <span className="ps-2 text-[#59302C] font-bold">17AYK</span>
        </div>
        <MoveRight height={20} width={20} className="text-[#BF4209]" />
        <CircleCheckBig height={20} width={20} className="text-[#BF4209]" />
      </div>
    </div>
  )
}