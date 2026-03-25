"use client"

import { Phone } from "lucide-react"

export function MobileCallButton() {
  return (
    <a
      href="tel:6026775045"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-4 rounded-full shadow-lg transition-colors md:hidden"
      aria-label="Call Now"
    >
      <Phone className="w-5 h-5" />
      <span>Call Now</span>
    </a>
  )
}
