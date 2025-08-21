import Image from "next/image"
import { Settings } from "lucide-react";

export default async function TopBar() {
  return (
    <div className="flex justify-between items-center p-6">
      <div className="w-1/6">
        {/* <Image src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Avatar" width={20} height={20} /> */}
        {/* <Image
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
          alt="Man wearing cool sunglasses"
          width={20}
          height={20}
          className="object-cover rounded-full"
        /> */}
        <div className="flex justify-center items-center h-12 w-12 rounded-full bg-white">
          <Settings className="h-6 w-6 text-[#CC703D]" />
        </div>
      </div>
      <div className="w-4/6">
        <div className="text-xs">Good morning</div>
        <div className="font-bold">James Maina</div>
      </div>
      <div className="w-1/6 flex justify-end">
        <div className="flex justify-center items-center h-12 w-12 rounded-full bg-white">
          <Settings className="h-6 w-6 text-[#CC703D]" />
        </div>
      </div>
    </div>
  )
}