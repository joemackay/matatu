// app/settings/page.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <div className="bg-[#CC703D] p-6">
        <div className="flex justify-between items-center pt-6 mb-6">
          <div className="w-1/2">
            <div className="flex justify-center items-center h-10 w-10 rounded-full bg-white" onClick={() => router.back()}>
              <ChevronLeft className="h-6 w-6 text-[#CC703D]" />
            </div>
          </div>
          <div className="w-1/2 flex justify-end">
            <h1 className="text-xl font-semibold">Settings</h1>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto space-y-6 p-4">
        {/* Profile Section */}
        <div className="shadow-md rounded-2xl bg-white p-4 space-y-3">
          <div>
            <div className="text-[#59302C] font-bold">Profile</div>
          </div>
          <div className="space-y-4">
            <div>
              <Label className="mb-2 text-[#59302C]" htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div>
              <Label className="mb-2 text-[#59302C]" htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
          </div>
        </div>

        {/* Account Section */}
        <div className="shadow-md rounded-2xl bg-white p-4 space-y-3">
          <div>
            <div className="text-[#59302C] font-bold">Account</div>
          </div>
          <div className="space-y-4">
            <div>
              <Label className="mb-2 text-[#59302C]" htmlFor="password">Change Password</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <div>
              <Label className="mb-2 text-[#59302C]" htmlFor="username">Username</Label>
              <Input id="username" placeholder="johndoe" />
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="shadow-md rounded-2xl bg-white p-4 space-y-3">
          <div>
            <div className="text-[#59302C] font-bold">Preferences</div>
          </div>
          <div className="space-y-4 text-[#59302C]">
            <div className="flex items-center justify-between">
              <span>Enable Notifications</span>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>
            <div className="flex items-center justify-between">
              <span>Dark Mode</span>
              <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button className="rounded-xl px-6">Save Changes</Button>
        </div>
      </div>
    </div>
  )
}
