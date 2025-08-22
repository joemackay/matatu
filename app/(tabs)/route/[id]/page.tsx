"use client";

import routes_mock_data from '@/mock/routes_info.json';
import { BusFront, ChevronLeft, CircleDot, Clock4, Goal, LandPlot, MapPinOff } from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from "next/navigation";
import { useSearchSelectionStore } from "@/store/search.store"

export default function RouteDetails() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const fromDestination = useSearchSelectionStore((state)=>state.fromDestination)
  const toDestination = useSearchSelectionStore((state)=>state.toDestination)

  const { routes_list } = routes_mock_data

  // find the route with matching id
  const routeInfo = routes_list.find((item) => item.id === parseInt(id));

  if (!routeInfo) {
    return ( //
      <div>
        <div className=" flex flex-col items-center mt-20">
          <div className='w-[20%]'><MapPinOff height={80} width={80} className='text-[#BF4209]' /></div>
          <div className='p-6 text-[#BF4209] flex flex-row justify-center'>
            <div className='w-[60%] text-center'>
              <div className='text-xl font-bold mb-2'>Route Not Available</div>
              <span>The Route requested is not Available at this time</span>
            </div>
          </div>
        </div>
        
        <div className=" flex flex-col items-center">
          <button
              className="w-40 h-14 bg-[#59302C] text-white py-2 rounded-xl hover:bg-[#7f4540] text-lg font-bold"
              onClick={() => router.back()}
            >
              <div className='flex flex-row justify-evenly items-center gap-3'>
                <div className="flex justify-center items-center h-10 w-10 rounded-full bg-white" onClick={() => router.back()}>
                  <ChevronLeft className="h-6 w-6 text-[#CC703D]" />
                </div>
                <div className='text-lg text-white'>Go back</div>
              </div>
            </button>
        </div>
      </div>
    )
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
            <h1 className="text-xl font-semibold">Available Routes</h1>
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
      <div className='p-6'>
        <div className='bg-white rounded-lg p-8'>
          {routeInfo.commute && routeInfo.commute.map((info, index) => (
            <div key={index} className='flex flex-row'>
              <div className='w-[15%] py-6'><CircleDot height={20} width={20} className="text-[#BF4209]" /></div>
              <div className='w-[85%]'>
                {info.type==="stage" ? 
                  <div className=' py-6 border-b border-dashed border-[#59302C]'>
                    <div className='flex flex-row'>
                      <div className='w-[70%] font-bold text-[#59302C]'>{info.name}</div>
                      <div className='w-[30%] font-bold text-[#59302C]'>{info.time}</div>
                    </div>
                    {info.landmark && (
                      <div className=''>
                        <span className='text-[#59302C]'>{info.landmark}</span>
                      </div>
                    )}
                    
                  </div> 
                  : 
                  <div className=' py-6 border-b border-dashed border-[#59302C]'>
                    <div className='flex flex-row gap-2'>
                      <div>{info.name ==="walk" ? '' : <BusFront height={20} width={20} className="text-[#BF4209]" />}</div>
                      <div className='text-[#59302C]'>{info.name}</div>
                    </div>
                    <div className='flex flex-row gap-2'>
                      <div><Clock4 height={20} width={20} className="text-[#BF4209]" /></div>
                      <div className='text-[#59302C]'>{info.duration}, {info.distance}</div>
                    </div>
                  </div>
                }
              </div>
            </div>
          ))}
          <div className='my-2 flex justify-end'>
            <Link
              href="/map"
              className="px-3 py-0 font-semibold text-[#BF4209]"
            >
              <span>View on map </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
