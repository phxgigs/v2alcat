import { Phone, Clock, Shield, Zap, MapPin, CheckCircle } from "lucide-react"

const serviceAreas = [
  { name: "Phoenix", available: true },
  { name: "Scottsdale", available: true },
  { name: "Tempe", available: true },
  { name: "Glendale", available: true },
  { name: "Peoria", available: true },
  { name: "Paradise Valley", available: true },
]

export function QuoteSidebar() {
  return (
    <div className="space-y-6">
      {/* Emergency Service Box */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-2">Emergency Service</h3>
        <p className="text-zinc-400 text-sm mb-4">
          Locked out? We can be there in 20 minutes!
        </p>
        <a
          href="tel:6026775045"
          className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-4 rounded-lg transition-colors w-full text-lg"
        >
          <Phone className="w-5 h-5" />
          (602) 677-5045
        </a>
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <Clock className="w-4 h-4 text-amber-500" />
            <span>24/7 Mobile Service</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <Shield className="w-4 h-4 text-amber-500" />
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <Zap className="w-4 h-4 text-amber-500" />
            <span>Fast Response Time</span>
          </div>
        </div>
      </div>

      {/* Service Areas Box */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Service Areas</h3>
        <ul className="space-y-2">
          {serviceAreas.map((area) => (
            <li key={area.name} className="flex items-center justify-between text-sm">
              <span className="text-zinc-300">{area.name}</span>
              <span className="flex items-center gap-1 text-green-500">
                <CheckCircle className="w-4 h-4" />
                Available
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
