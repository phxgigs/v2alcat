import { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Car, Key, Wrench, Clock, CheckCircle, Phone } from "lucide-react"
import { QuoteSidebar } from "@/components/quote-sidebar"
import { Breadcrumb } from "@/components/breadcrumb"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Automotive Locksmith Phoenix | Car Key Replacement & Ignition Repair",
  description: "24/7 Automotive locksmith services in Phoenix. Car lockouts, key replacement, transponder programming, ignition repair, ignition replacement, motorcycle keys, RV locksmith. Fast mobile service for BMW, Honda, Toyota, Ford, Chevy, Mercedes, Audi, VW and all makes.",
  keywords: [
    // Core auto locksmith keywords
    "auto locksmith phoenix", "car key replacement near me", "key fob programming near me", "transponder key programming near me",
    "motorcycle locksmith near me", "motorcycle key replacement near me", "rv locksmith near me",
    // Ignition keywords
    "ignition repair near me", "car ignition repair near me", "ignition locksmith near me", "car ignition repair",
    "ignition replacement near me", "ignition lock cylinder repair near me", "car ignition locksmith near me",
    "ignition repair service near me", "ignition key replacement near me", "auto ignition repair near me",
    // Key cutting keywords
    "sidewinder key cutting", "laser cut keys near me", "spare key maker near me", "duplicate keys made near me", "key reprogramming near me",
    // Lockout keywords
    "car lockout service near me", "locked keys in car near me", "mobile car locksmith near me",
    // Brand keywords
    "bmw locksmith near me", "honda locksmith near me", "vw locksmith near me", "toyota locksmith near me",
    "ford locksmith near me", "chevy locksmith near me", "mercedes locksmith near me", "audi locksmith near me",
    "nissan locksmith near me", "hyundai locksmith near me", "kia locksmith near me", "lexus locksmith near me"
  ],
}

const services = [
  {
    title: "Car Key Replacement & Duplication",
    description: "Losing your car keys doesn't have to be a disaster. We can generate new keys for your vehicle from scratch, even if you don't have the original. Our mobile units are equipped with key cutting machines and stocked with thousands of key blanks and remotes for all makes.",
    features: [
      "Transponder Keys (Chip Keys)",
      "Laser Cut / Sidewinder Keys",
      "Smart Keys & Proximity Fobs",
      "Spare Keys & Duplicate Keys Made",
      "Tibbe Keys (Jaguar/Ford)",
      "Motorcycle & RV Keys",
    ],
  },
  {
    title: "Ignition Repair & Replacement",
    description: "Is your key not turning in the ignition? Or maybe it's stuck and won't come out? Our ignition locksmith specialists handle all ignition repair, ignition replacement, and ignition lock cylinder repair. We fix ignition problems faster and cheaper than mechanics or dealers.",
    features: [
      "Ignition Repair Near Me",
      "Ignition Cylinder Replacement",
      "Ignition Lock Cylinder Repair",
      "Ignition Switch Repair",
      "Ignition Key Replacement",
      "Stuck Key Extraction",
    ],
  },
  {
    title: "24/7 Emergency Car Lockouts",
    description: "Locked your keys in the trunk? Child or pet locked inside? We prioritize emergency lockout calls. Our technicians use specialized tools to unlock your vehicle without causing any damage to the door, window, or paint.",
    features: [
      "Zero-Damage Door Unlocking",
      "Trunk Opening",
      "Glove Box Unlocking",
      "Rapid Response Times",
    ],
  },
]

const comparisonData = [
  { feature: "Location", us: "We Come To You", dealer: "You Must Tow Car There" },
  { feature: "Availability", us: "24/7 Emergency Service", dealer: "Business Hours Only" },
  { feature: "Pricing", us: "Competitive & Upfront", dealer: "Premium Dealer Rates" },
  { feature: "Speed", us: "Same Day / Immediate", dealer: "Often Days Wait" },
]

const carBrands = [
  { name: "BMW", description: "BMW key replacement, BMW locksmith, BMW ignition repair" },
  { name: "Honda", description: "Honda key replacement, Honda locksmith, Honda ignition repair" },
  { name: "Volkswagen", description: "VW key replacement, VW locksmith, Volkswagen ignition repair" },
  { name: "Chevrolet", description: "Chevy key replacement, Chevrolet locksmith, GM ignition repair" },
  { name: "Ford", description: "Ford key replacement, Ford locksmith, Ford ignition repair" },
  { name: "Mercedes-Benz", description: "Mercedes key replacement, Mercedes locksmith, Mercedes ignition repair" },
  { name: "Toyota", description: "Toyota key replacement, Toyota locksmith, Toyota ignition repair" },
  { name: "Dodge", description: "Dodge key replacement, Dodge locksmith, Dodge ignition repair" },
  { name: "Nissan", description: "Nissan key replacement, Nissan locksmith, Nissan ignition repair" },
  { name: "Jeep", description: "Jeep key replacement, Jeep locksmith, Jeep ignition repair" },
  { name: "Chrysler", description: "Chrysler key replacement, Chrysler locksmith, Chrysler ignition repair" },
  { name: "Audi", description: "Audi key replacement, Audi locksmith, Audi ignition repair" },
  { name: "Hyundai", description: "Hyundai key replacement, Hyundai locksmith, Hyundai ignition repair" },
  { name: "Kia", description: "Kia key replacement, Kia locksmith, Kia ignition repair" },
  { name: "Subaru", description: "Subaru key replacement, Subaru locksmith, Subaru ignition repair" },
  { name: "Mazda", description: "Mazda key replacement, Mazda locksmith, Mazda ignition repair" },
  { name: "Lexus", description: "Lexus key replacement, Lexus locksmith, Lexus ignition repair" },
  { name: "GMC", description: "GMC key replacement, GMC locksmith, GMC ignition repair" },
  { name: "Ram", description: "Ram key replacement, Ram locksmith, Ram ignition repair" },
  { name: "Porsche", description: "Porsche key replacement, Porsche locksmith, Porsche ignition repair" },
]

const faqs = [
  {
    question: "Can you replace a car key without the original?",
    answer: "Yes! We can create a new car key from scratch using your vehicle's VIN and our specialized equipment. We can program transponder chips and key fobs on-site.",
  },
  {
    question: "How much does it cost to replace a transponder key?",
    answer: "Transponder key costs vary based on vehicle make and model, but we typically charge 40-60% less than dealerships. Call us for a free quote specific to your vehicle.",
  },
  {
    question: "Do you program key fobs for push-to-start cars?",
    answer: "Yes, we program smart keys and proximity fobs for most push-to-start vehicles, including newer models with advanced security systems.",
  },
  {
    question: "My key broke in the ignition. Can you fix it?",
    answer: "Absolutely. We can extract broken keys from ignitions, door locks, and trunks without damaging the lock cylinder. We can then make a new key on the spot.",
  },
  {
    question: "Do you service European cars like BMW or Mercedes?",
    answer: "Yes, our technicians are trained and equipped to handle European vehicles including BMW, Mercedes-Benz, Audi, VW, Porsche, and more.",
  },
  {
    question: "How long does it take to make a new car key?",
    answer: "Most car keys can be cut and programmed in 15-30 minutes. More complex smart keys may take up to an hour.",
  },
  {
    question: "Can you rekey my car door locks if my keys were stolen?",
    answer: "Yes, we can rekey your door locks and ignition so that old keys will no longer work, providing peace of mind if your keys were lost or stolen.",
  },
  {
    question: "Do you replace motorcycle keys?",
    answer: "Yes! We are experienced motorcycle locksmiths and make keys for most motorcycle brands including Honda, Yamaha, Kawasaki, Suzuki, Harley-Davidson, BMW, Ducati, and more. We can cut and program motorcycle keys on-site.",
  },
  {
    question: "Do you provide RV locksmith services?",
    answer: "Absolutely. Our RV locksmith services include lockouts, key replacement, lock rekeying, and new lock installation for all RV and motorhome brands. We come to your location whether you're at home or at a campsite.",
  },
  {
    question: "Can you cut sidewinder or laser cut keys?",
    answer: "Yes, we have specialized key cutting machines for sidewinder keys and laser cut keys used in many modern vehicles including Honda, Acura, Ford, and luxury brands. These high-security keys require precision equipment that we carry in our mobile units.",
  },
  {
    question: "Will my new key work the remote buttons?",
    answer: "Yes, if you need a key with remote functions, we can program the remote/fob to work with your vehicle's central locking system.",
  },
  {
    question: "Is your automotive locksmith service available 24/7?",
    answer: "Yes! We offer 24/7 emergency automotive locksmith service throughout the Phoenix Metro Area. Call us anytime, day or night.",
  },
]

// Service Schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Automotive Locksmith Service',
  serviceType: 'Automotive Locksmith',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Alcatraz Lock & Key',
    telephone: '+1-602-677-5045',
  },
  areaServed: {
    '@type': 'City',
    name: 'Phoenix',
    '@id': 'https://en.wikipedia.org/wiki/Phoenix,_Arizona',
  },
  description: '24/7 Automotive locksmith services including car lockouts, car key replacement, key fob programming, transponder keys, ignition repair, and motorcycle keys.',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
    },
  },
}

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

// Breadcrumb Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://alcatrazlock.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Automotive Locksmith',
      item: 'https://alcatrazlock.com/automotive',
    },
  ],
}

export default function AutomotivePage() {
  return (
    <>
      <Script
        id="automotive-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="automotive-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="automotive-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    <div className="bg-zinc-950">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ label: "Automotive" }]} />
          <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-4">
            <Car className="w-4 h-4" />
            Automotive Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Car Key & Lock Experts
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl">
            Fast, reliable automotive locksmith services for all makes and models.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Intro */}
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-4">Complete Automotive Locksmith Solutions in Phoenix</h2>
                <p className="text-zinc-400">
                  At Alcatraz Locksmith, we understand that automotive lock and key issues can be incredibly stressful. Whether you&apos;re stranded in a parking lot with keys locked inside your car, or you&apos;ve lost your only set of keys, our team of certified automotive locksmiths is here to help. We specialize in providing rapid, professional, and affordable car locksmith services throughout the entire <Link href="/service-areas" className="text-amber-500 hover:underline">Phoenix Metropolitan area</Link>.
                </p>
                <p className="text-zinc-400">
                  Unlike dealerships that often require you to tow your vehicle to their location and wait days for service, our mobile locksmith units come directly to you. We are fully equipped with state-of-the-art tools and diagnostic equipment to handle everything from simple car lockouts to complex transponder key programming and ignition repairs on the spot. We also offer <Link href="/residential" className="text-amber-500 hover:underline">residential locksmith</Link> and <Link href="/commercial" className="text-amber-500 hover:underline">commercial locksmith</Link> services.
                </p>
                <p className="text-zinc-400">
                  Our technicians are highly trained and experienced with all major vehicle makes and models, including domestic, Asian, and European cars. We stay up-to-date with the latest automotive security technologies to ensure we can service even the newest vehicles on the road. When you choose Alcatraz Locksmith, you&apos;re choosing a partner dedicated to getting you back on the road safely and quickly.
                </p>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Our Specialized Automotive Services</h2>
                <div className="space-y-8">
                  {services.map((service, index) => (
                    <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                      <p className="text-zinc-400 mb-4">{service.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                            <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Car Brands We Service */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Car Brands We Service</h2>
                <p className="text-zinc-400 mb-6">
                  Our automotive locksmiths are trained and equipped to work on all major car brands. Whether you need car key replacement, key fob programming, or ignition repair, we have the tools and expertise for your vehicle.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {carBrands.map((brand) => (
                    <div 
                      key={brand.name} 
                      className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-center hover:border-amber-500 transition-colors"
                      title={brand.description}
                    >
                      <span className="text-white font-medium">{brand.name}</span>
                    </div>
                  ))}
                </div>
                <p className="text-zinc-500 text-sm mt-4">
                  Don&apos;t see your vehicle? We service most makes and models. <Link href="/contact" className="text-amber-500 hover:underline">Contact us</Link> for assistance.
                </p>
              </div>

              {/* Comparison Table */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Why Choose Alcatraz vs. Dealership?</h2>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-800">
                        <th className="text-left text-zinc-400 font-medium p-4">Feature</th>
                        <th className="text-left text-amber-500 font-medium p-4">Alcatraz Locksmith</th>
                        <th className="text-left text-zinc-400 font-medium p-4">Car Dealership</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className="border-b border-zinc-800 last:border-0">
                          <td className="text-zinc-300 p-4">{row.feature}</td>
                          <td className="text-white p-4">{row.us}</td>
                          <td className="text-zinc-500 p-4">{row.dealer}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Automotive Locksmith FAQ</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-zinc-900 border border-zinc-800 rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-white hover:text-amber-500 text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-zinc-400">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <QuoteSidebar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
