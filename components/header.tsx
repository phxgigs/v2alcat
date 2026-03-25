"use client"

import Link from "next/link"
import { useState } from "react"
import { Phone, Menu, X, Shield, Clock } from "lucide-react"

const navLinks = [
  { href: "/automotive", label: "Automotive" },
  { href: "/residential", label: "Residential" },
  { href: "/commercial", label: "Commercial" },
  { href: "/safe-services", label: "Safe Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-zinc-950 border-b border-zinc-800">
      {/* Top Bar */}
      <div className="bg-zinc-900 py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-amber-500">
              <Shield className="w-4 h-4" />
              Licensed, Bonded & Insured
            </span>
            <span className="flex items-center gap-2 text-amber-500">
              <Clock className="w-4 h-4" />
              24/7 Emergency Service
            </span>
          </div>
          <span className="text-zinc-400">Serving Phoenix Metro Area</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
              <span className="text-zinc-900 font-bold text-xl">A</span>
            </div>
            <div>
              <span className="text-white font-bold text-xl tracking-tight block">ALCATRAZ</span>
              <span className="text-amber-500 text-xs tracking-widest">LOCK & KEY</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-300 hover:text-amber-500 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone CTA */}
          <a
            href="tel:6026775045"
            className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-3 rounded-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            (602) 677-5045
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-zinc-800 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-zinc-300 hover:text-amber-500 transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:6026775045"
                className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-3 rounded-lg transition-colors mt-2"
              >
                <Phone className="w-5 h-5" />
                (602) 677-5045
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
