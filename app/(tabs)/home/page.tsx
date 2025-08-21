import Popular from "@/app/ui/home/popular";
import SearchBox from "@/app/ui/home/search_box";
import TopBar from "@/app/ui/home/top_bar";
import Welcome from "@/app/ui/home/welcome";


export default async function Page() {

  return (
    <div>
      <div className="bg-[#CC703D]">
        <TopBar />
        <Welcome />
      </div>
      <SearchBox />
      <Popular />
    </div>
  )
}