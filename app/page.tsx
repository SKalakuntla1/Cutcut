import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { CreateCard } from "@/components/create-card"
import Image from "next/image"

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-3 gap-4 mb-8">
            <CreateCard
              title="Create new video"
              icon="/placeholder.svg?height=32&width=32"
              gradient="bg-gradient-to-r from-cyan-400 to-blue-400"
            />
            <CreateCard
              title="Create new image"
              icon="/placeholder.svg?height=32&width=32"
              gradient="bg-gradient-to-r from-purple-400 to-pink-400"
            />
            <CreateCard
              title="AutoCut"
              icon="/placeholder.svg?height=32&width=32"
              gradient="bg-gradient-to-r from-blue-400 to-indigo-400"
            />
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Create your first video in minutes</h2>
            <div className="aspect-video w-96 bg-black rounded-lg overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL || "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-01-19_at_1.10.54_PM-7TWydIsgrxFeyLPfX24jQdTHTOs9Sm.webp"}`}
                alt="Tutorial video thumbnail"
                width={384}
                height={216}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-sm text-gray-600">
              A quick steps to kickstart your viral video! Start with the walk...
            </p>
          </section>

          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Video templates</h2>
              <button className="text-sm text-blue-600 hover:underline">View more</button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    alt={`Template ${i + 1}`}
                    width={280}
                    height={157}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

