import Link from 'next/link'

export const EmergencyBanner = () => {
  return (
    <div className="bg-[#FFEB3B] text-neutral-dark font-bold text-center py-2 px-4 shadow-sm w-full animate-pulse border-b border-[#FBC02D]">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <span className="text-xl">⚡</span>
        <span>Emergency pest control available today across Kent. Call us now.</span>
      </div>
    </div>
  )
}
