import { Metadata } from "next"
import Link from "next/link"
import { Phone, Clock, MapPin, Shield, Star, CheckCircle2, Car, Home, Building2, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Glendale Locksmith | 24/7 Emergency Lock & Key Service | Alcatraz Lock",
  description: "24/7 Emergency Locksmith in Glendale, AZ. Fast 20-30 minute response for car lockouts, house lockouts, lock rekeying, and key replacement. Licensed & Insured. Call (602) 677-5045",
}

const services = [
  { icon: Car, title: "Automotive Locksmith", description: "Car lockouts, key replacement, fob programming, ignition repair" },
  { icon: Home, title: "Residential Locksmith", description: "House lockouts, lock rekeying, smart lock installation, deadbolts" },
  { icon: Building2, title: "Commercial Locksmith", description: "Business lockouts, master key systems, access control, panic bars" },
  { icon: Lock, title: "Safe Services", description: "Safe cracking, combination changes, safe repair and moving" },
]

const neighborhoods = [
  "Downtown Glendale", "Historic Catlin Court", "Westgate", "Arrowhead",
  "Thunderbird", "Bellair", "Cactus", "Northern", "Peoria Ave Area",
  "Maryland", "Glendale Sports District", "Loop 101 Corridor"
]

const reviews = [
  { name: "Robert S.", rating: 5, text: "Got locked out during a Cardinals game at State Farm Stadium. They came quickly and got me back in my car. Lifesaver!", date: "1 week ago" },
  { name: "Patricia M.", rating: 5, text: "Needed locks changed after buying my Glendale home. Fast, professional, and affordable. Will use again!", date: "3 weeks ago" },
  { name: "Tom H.", rating: 5, text: "Our restaurant in Westgate needed emergency lock repair. They came out same day and fixed everything. Great service!", date: "2 weeks ago" },
]

export default function GlendalePage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-zinc-900 to-zinc-950 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span className="text-amber-500 text-sm font-medium">Serving Glendale, AZ</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Glendale Locksmith
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              24/7 Emergency locksmith services throughout Glendale. Fast 20-30 minute response time. Licensed, bonded, and insured.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-zinc-900 font-semibold text-lg px-8">
                <a href="tel:+16026775045">
                  <Phone className="w-5 h-5 mr-2" />
                  (602) 677-5045
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-zinc-900 border-y border-zinc-800 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-amber-500 mb-2" />
              <span className="text-white font-semibold">20-30 Min Response</span>
              <span className="text-zinc-500 text-sm">In Glendale Area</span>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-amber-500 mb-2" />
              <span className="text-white font-semibold">Licensed & Insured</span>
              <span className="text-zinc-500 text-sm">Fully Certified</span>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-8 h-8 text-amber-500 mb-2" />
              <span className="text-white font-semibold">5-Star Rated</span>
              <span className="text-zinc-500 text-sm">500+ Reviews</span>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle2 className="w-8 h-8 text-amber-500 mb-2" />
              <span className="text-white font-semibold">Upfront Pricing</span>
              <span className="text-zinc-500 text-sm">No Hidden Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Locksmith Services in Glendale
          </h2>
          <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
            Complete locksmith solutions for automotive, residential, and commercial needs throughout Glendale.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="bg-zinc-900 border-zinc-800 hover:border-amber-500/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <service.icon className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-zinc-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="bg-zinc-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Glendale Neighborhoods We Serve
          </h2>
          <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
            Fast response times to all Glendale neighborhoods and surrounding areas.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {neighborhoods.map((neighborhood) => (
              <span key={neighborhood} className="bg-zinc-800 text-zinc-300 px-4 py-2 rounded-full text-sm">
                {neighborhood}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            What Glendale Customers Say
          </h2>
          <p className="text-zinc-400 text-center mb-12">Real reviews from real customers</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-zinc-300 mb-4">{`"${review.text}"`}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">{review.name}</span>
                    <span className="text-zinc-500 text-sm">{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Locked Out in Glendale?
          </h2>
          <p className="text-zinc-800 text-lg mb-8 max-w-2xl mx-auto">
            {`Don't wait! Our Glendale locksmiths are available 24/7 and can be at your location in 20-30 minutes.`}
          </p>
          <Button asChild size="lg" className="bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-lg px-8">
            <a href="tel:+16026775045">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (602) 677-5045
            </a>
          </Button>
        </div>
      </section>
    </main>
  )
}
