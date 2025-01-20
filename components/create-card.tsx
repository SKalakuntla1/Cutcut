import Image from "next/image"

interface CreateCardProps {
  title: string
  icon: string
  gradient: string
}

export function CreateCard({ title, icon, gradient }: CreateCardProps) {
  return (
    <div className={`rounded-xl p-6 cursor-pointer transition-transform hover:scale-105 ${gradient}`}>
      <Image src={icon || "/placeholder.svg"} alt={title} width={32} height={32} className="mb-4" />
      <h3 className="text-white font-medium">{title}</h3>
    </div>
  )
}

