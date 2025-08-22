const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function PopularItemCardSkeleton() {
  return (
    <div className="flex flex-row justify-between items-center rounded-xl bg-white p-2 mb-3">
      <div className='w-1/6'>
        <div className='w-10 h-10 justify-center rounded-full bg-[#EDCEB2] animate-pulse'>
          {/* <div className="w-8 h-4 bg-gray-300 animate-pulse rounded-lg"></div> */}
        </div>
      </div>
      <div className='w-4/6 text-[#59302C] space-y-2'>
        <div className="w-full h-4 bg-gray-300 animate-pulse rounded-lg"></div>
        <div className="w-full h-4 bg-gray-300 animate-pulse rounded-lg"></div>
      </div>
      <div className='w-1/6 flex justify-end'>
        <div className="w-10 h-10 bg-gray-300 animate-pulse rounded-lg"></div>
      </div>
    </div>
  )
}
export function SearchItemCardSkeleton() {
  return (
    <div className="flex flex-col bg-white shadow rounded-xl p-4 hover:bg-gray-50 mb-4">
      <div className="flex flex-row items-center mb-2">
        <div className="w-[10%]">
          <div className="w-8 h-4 bg-gray-300 animate-pulse rounded-lg"></div>
        </div>
        <div className="w-[90%]">
          <div className="w-full h-4 bg-gray-300 animate-pulse rounded-lg"></div>
        </div>
      </div>

      <div className="flex flex-row items-center mb-2">
        <div className="w-[10%]">
          <div className="w-8 h-4 bg-gray-300 animate-pulse rounded-lg"></div>
        </div>
        <div className="w-[60%]">
          <span className="text-[#59302C] font-light"><div className="w-8 h-4 bg-gray-300 animate-pulse rounded-lg"></div></span>
        </div>
        <div className="w-[30%] flex justify-end">
          <div className="w-full h-4 bg-gray-300 animate-pulse rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}

export default function SeachListSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <SearchItemCardSkeleton />
        <SearchItemCardSkeleton />
        <SearchItemCardSkeleton />
        <SearchItemCardSkeleton />
      </div>
    </>
  );
}