import { Bell, Settings, HelpCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  return (
    <header className="h-14 border-b border-gray-200 px-4 flex items-center justify-end gap-4">
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <Bell size={20} className="text-gray-600" />
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <Settings size={20} className="text-gray-600" />
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <HelpCircle size={20} className="text-gray-600" />
      </button>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>CC</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>View profile</DropdownMenuItem>
          <DropdownMenuItem>Theme</DropdownMenuItem>
          <DropdownMenuItem>Language</DropdownMenuItem>
          <DropdownMenuItem>See IDs</DropdownMenuItem>
          <DropdownMenuItem>Sign out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}

