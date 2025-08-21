import { ChevronRight, LandPlot } from 'lucide-react';
export default function PopularItem({title, road, town}: {title: string, road: string, town: string}) {
  return (
    <div className="flex flex-row justify-between items-center rounded-xl bg-white p-2 mb-3">
      <div className='w-1/6'>
        <div className='flex items-center w-10 h-10 justify-center rounded-full bg-[#EDCEB2]'>
          <LandPlot size={18} className='text-black' />
        </div>
      </div>
      <div className='w-4/6 text-[#59302C]'>
        <div className='font-semibold'>{title}</div>
        <div>{road}, {town}</div>
      </div>
      <div className='w-1/6 flex justify-end'>
        <ChevronRight className='text-black'  />
      </div>
    </div>
  )
}