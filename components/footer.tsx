import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-zinc-900 font-bold text-lg">A</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg block">ALCATRAZ</span>
                <span className="text-amber-500 text-xs tracking-widest">LOCK & KEY</span>
              </div>
            </Link>
            <p className="text-zinc-400 mb-6">
              Your trusted 24/7 mobile locksmith service in the Phoenix Metro Area. Licensed, bonded, and insured.
            </p>
            <a
              href="tel:6026775045"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-900 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(602) 677-5045</span>
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/automotive" className="text-zinc-400 hover:text-amber-500 transition-colors">
                  Automotive Locksmith
                </Link>
              </li>
              <li>
                <Link href="/residential" className="text-zinc-400 hover:text-amber-500 transition-colors">
                  Residential Locksmith
                </Link>
              </li>
              <li>
                <Link href="/commercial" className="text-zinc-400 hover:text-amber-500 transition-colors">
                  Commercial Locksmith
                </Link>
              </li>
              <li>
                <Link href="/safe-services" className="text-zinc-400 hover:text-amber-500 transition-colors">
                  Safe Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:6026775045"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>(602) 677-5045</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:service@alcatrazlock.com"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-500" />
                  <span>service@alcatrazlock.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span>Phoenix Metro Area, AZ</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4">Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-zinc-400">
                <Clock className="w-4 h-4 text-amber-500" />
                <span>Open 24 Hours / 7 Days</span>
              </li>
              <li className="text-zinc-400 ml-7">
                <span>Including Holidays</span>
              </li>
            </ul>
            <h4 className="text-white font-semibold mb-4 mt-6">Locations</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/locations/phoenix" className="text-zinc-400 hover:text-amber-500 transition-colors">
                  Phoenix
                </Link>
              </li>
              <li>
                <Link href="/locations/scottsdale" className="text-zinc-400 hover:text-amber-500 transition-colors">
                  Scottsdale
                </Link>
              </li>
              <li>
                <Link href="/service-areas" className="text-amber-500 hover:text-amber-400 transition-colors text-sm">
                  View All Locations →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              &copy; {currentYear} Alcatraz Lock & Key. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-zinc-500">
              <Link href="/privacy-policy" className="hover:text-zinc-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-zinc-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="/service-areas" className="hover:text-zinc-300 transition-colors">
                Service Areas
              </Link>
              <Link href="/contact" className="hover:text-zinc-300 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
