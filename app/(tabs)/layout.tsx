"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Save, FileQuestionMark, Settings } from "lucide-react" // icons
import { cn } from "@/lib/utils" // helper for conditional classes

const tabs = [
  { name: "Home", href: "/home", icon: Home },
  { name: "Saved", href: "/saved", icon: Save },
  { name: "Tips", href: "/tips", icon: FileQuestionMark },
  { name: "Settings", href: "/settings", icon: Settings },
]

export default function TabsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-screen bg-[#FCE8CF]">
      {/* Main content area */}
      <main className="flex-1 overflow-y-auto">{children}</main>

      {/* Bottom Tabs */}
      <nav className="border-t border-gray-200 bg-white py-3">
        <ul className="flex justify-around">
          {tabs.map(({ name, href, icon: Icon }) => {
            const active = pathname.startsWith(href)
            return (
              <li key={name}>
                <Link
                  href={href}
                  className={cn(
                    "flex flex-col items-center justify-center py-2 px-3 text-sm text-[#BF4209]",
                    active ? "font-bold" : ""
                  )}
                >
                  {/* <Icon
                    className={cn("h-6 w-6 ", active ? "stroke-blue-600" : "stroke-[#BF4209]")}
                  /> */}
                  <Icon
                    className={cn("h-6 w-6 stroke-[#BF4209]")}
                  />
                  <span>{name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
