import Link from "next/link"
import { Home, Clock, Share2, Layout, Wand2, Plus, Users } from "lucide-react"

export function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xl font-bold">CutCut</span>
        </div>
        <button className="w-full bg-blue-500 text-white rounded-md py-2 px-4 flex items-center gap-2">
          <Plus size={20} />
          Create new
        </button>
      </div>

      <nav className="flex-1 p-4">
        <div className="space-y-1">
          <Link href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100">
            <Home size={20} />
            Start
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100">
            <Clock size={20} />
            Recent drafts
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100">
            <Share2 size={20} />
            Share history
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100">
            <Layout size={20} />
            Templates
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100">
            <Wand2 size={20} />
            Magic tools
            <span className="ml-auto text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">New</span>
          </Link>
        </div>

        <div className="mt-8">
          <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Spaces</div>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100">
            <Users size={20} />
            Shared creates
          </Link>
        </div>
      </nav>
    </div>
  )
}

