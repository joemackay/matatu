import Link from "next/link";
import PopularItem from "./popular-item";
import popular_data from '../../../mock/popular.json'

export default async function Popular() {
  const { malls } = popular_data.popular
  return (
    <div className="mt-6 p-6">
      <div className="flex flex-row justify-between items-center mb-4 text-lg">
        <span className="text-[#59302C] font-bold">Popular Places</span>
        <Link
          href="/all"
          className="px-3 py-0 font-medium text-black md:text-base"
        >
          <span>See All</span>
        </Link>

      </div>
      <div className="flex flex-row justify-between items-center mb-4 text-sm">
        <Link
          href="/all"
          className="rounded-xl bg-[#EDCEB2] px-3 py-0 font-medium text-black md:text-base"
        >
          <span>All</span>
        </Link>
        <Link
          href="/malls"
          className="rounded-xl bg-[#BF4209] px-3 py-0 font-medium text-white md:text-base"
        >
          <span>Malls</span>
        </Link>
        <Link
          href="/hotels"
          className="rounded-xl bg-[#EDCEB2] px-3 py-0 font-medium text-black md:text-base"
        >
          <span>Hotels</span>
        </Link>
        <Link
          href="/hospitals"
          className="rounded-xl bg-[#EDCEB2] px-3 py-0 font-medium text-black md:text-base"
        >
          <span>Hospitals</span>
        </Link>
        <Link
          href="/clubs"
          className="rounded-xl bg-[#EDCEB2] px-3 py-0 font-medium text-black md:text-base"
        >
          <span>Clubs</span>
        </Link>
      </div>
      <div className="flex flex-col">
        {malls && malls.map((mall, index) => (
          <PopularItem
            key={index}
            title={mall.name}
            road={mall.road}
            town={mall.town}
          />
        ))}
        
      </div>
    </div>
  )
}