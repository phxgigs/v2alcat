import { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Building2, Key, Lock, Shield, CheckCircle } from "lucide-react"
import { QuoteSidebar } from "@/components/quote-sidebar"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Commercial Locksmith Phoenix | Business Security & Access Control",
  description: "Professional commercial locksmith services in Phoenix. Master key systems, commercial door locks, access control, panic bars, high-security locks. Licensed & insured.",
  keywords: ["commercial door locks near me", "commercial locksmith", "business locksmith", "office locksmith", "master key system", "panic bar installation", "access control"],
}

const services = [
  {
    title: "Access Control & Master Key Systems",
    description: "Stop carrying a huge ring of keys. A master key system allows you to open every door with one key, while restricting employees to only the areas they need to access. We design and implement scalable systems for buildings of any size.",
    features: [
      "Master Key System Design",
      "Restricted Keyways (Do Not Duplicate)",
      "Electronic Keypad Locks",
      "Card Reader Systems",
      "Biometric Access Control",
      "Employee Access Management",
    ],
  },
  {
    title: "Commercial Hardware Installation",
    description: "We install and repair all types of commercial door hardware. From panic bars that ensure safe egress to hydraulic door closers that keep your building secure and energy-efficient.",
    features: [
      "Panic Bars / Exit Devices",
      "Door Closers & Pivots",
      "Mortise Locks",
      "Adams Rite Storefront Locks",
      "High-Security Cylinders",
      "File Cabinet & Desk Locks",
    ],
  },
  {
    title: "Emergency Business Services",
    description: "A lockout or broken lock can halt your business operations. We prioritize commercial calls to get you back in business fast. We also provide emergency rekeying if keys are lost or stolen.",
    features: [
      "Office Lockouts",
      "Emergency Rekeying",
      "Burglary Repair",
      "Safe Opening",
    ],
  },
]

const hardwareComparison = [
  { feature: "Durability (Cycles)", commercial: "800,000+ Cycles", residential: "200,000 Cycles" },
  { feature: "Security", commercial: "Heavy Duty / Pick Resistant", residential: "Standard Protection" },
  { feature: "Key Control", commercial: "Restricted Keyways Available", residential: "Easily Duplicated" },
  { feature: "Code Compliance", commercial: "ADA & Fire Code Compliant", residential: "Not Rated for Commercial Use" },
]

const industrySolutions = [
  { industry: "Retail", solutions: "High-security deadbolts, restricted keyways to prevent employee duplication, safe installation for cash management." },
  { industry: "Office Buildings", solutions: "Master key systems for janitorial/management access, electronic access control for main entries, file cabinet locks." },
  { industry: "Property Management", solutions: "Rapid rekeying services for tenant turnover, master key systems for multi-unit complexes, eviction services." },
  { industry: "Healthcare", solutions: "ADA compliant hardware, push-button locks for medication storage, sensitive area access control." },
  { industry: "Education", solutions: "Classroom security locks (lockable from inside), panic bars for assembly areas, master keying for campus access." },
]

const faqs = [
  {
    question: "Do you install master key systems for office buildings?",
    answer: "Yes, we design and install complete master key systems for office buildings of any size. We can create hierarchical access levels for different departments and management tiers.",
  },
  {
    question: "Can you repair a commercial glass door lock?",
    answer: "Yes, we service all types of commercial glass door locks including Adams Rite, storefront locks, and automatic door systems.",
  },
  {
    question: "Do you install panic bars and exit devices?",
    answer: "Yes, we install and service all major brands of panic bars and exit devices. We ensure your installation meets ADA and fire code requirements.",
  },
  {
    question: "Can you rekey our office locks after an employee leaves?",
    answer: "Absolutely. We offer rapid rekeying services to ensure terminated employees no longer have access to your facility.",
  },
  {
    question: "Do you offer high-security restricted keyways?",
    answer: "Yes, we offer restricted keyway systems that prevent unauthorized key duplication. Only authorized personnel can order new keys.",
  },
  {
    question: "Can you install electronic access control systems?",
    answer: "Yes, we install complete electronic access control systems including card readers, keypads, and biometric scanners with full audit trail capabilities.",
  },
  {
    question: "Do you service commercial safes?",
    answer: "Yes, we offer comprehensive safe services including opening, combination changes, repairs, and maintenance for all types of commercial safes.",
  },
  {
    question: "Do you offer commercial accounts with billing terms?",
    answer: "Yes, we offer commercial accounts with net-30 billing terms for qualified businesses. Contact us to set up an account.",
  },
  {
    question: "Can you fix a door closer that slams shut?",
    answer: "Yes, door closer adjustment and repair is one of our common services. We can adjust or replace hydraulic door closers to operate smoothly.",
  },
  {
    question: "Are you available for after-hours emergency service?",
    answer: "Yes, we provide 24/7 emergency commercial locksmith services. We understand that business security issues can't wait until morning.",
  },
]

// Service Schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Commercial Locksmith Service',
  serviceType: 'Commercial Locksmith',
  provider: { '@type': 'LocalBusiness', name: 'Alcatraz Lock & Key', telephone: '+1-602-677-5045' },
  areaServed: { '@type': 'City', name: 'Phoenix' },
  description: 'Professional commercial locksmith services including master key systems, access control, panic bars, commercial door locks.',
}

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
}

// Breadcrumb Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://alcatrazlock.com' },
    { '@type': 'ListItem', position: 2, name: 'Commercial Locksmith', item: 'https://alcatrazlock.com/commercial' },
  ],
}

export default function CommercialPage() {
  return (
    <>
      <Script id="commercial-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="commercial-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="commercial-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <div className="bg-zinc-950">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-4">
            <Building2 className="w-4 h-4" />
            Commercial Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Business Security Solutions
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl">
            Protecting your assets, employees, and customers with industrial-grade security.
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
                <h2 className="text-2xl font-bold text-white mb-4">Securing Phoenix Businesses Since 2008</h2>
                <p className="text-zinc-400">
                  Running a business comes with enough challenges; worrying about the security of your facility shouldn&apos;t be one of them. Alcatraz Locksmith is the trusted partner for hundreds of businesses across the Phoenix metro area, from small retail shops to large corporate office parks. We specialize in commercial-grade security solutions that protect your physical assets, proprietary information, and the safety of your staff.
                </p>
                <p className="text-zinc-400">
                  Commercial locks and hardware endure much higher traffic and abuse than residential locks. That&apos;s why we only install heavy-duty, ANSI Grade 1 and 2 hardware designed to withstand the rigors of daily use. Whether you need to upgrade your storefront security, install a master key system for better access control, or ensure your building meets fire code regulations with proper exit devices, our technicians have the expertise to get the job done right.
                </p>
                <p className="text-zinc-400">
                  We also understand that time is money. Our fleet of mobile workshops is fully stocked with commercial hardware, allowing us to complete most jobs in a single visit. We offer flexible scheduling to minimize disruption to your operations and 24/7 emergency service for when the unexpected happens. Need <Link href="/safe-services" className="text-amber-500 hover:underline">safe services</Link> for your business? We handle commercial safes too. We serve businesses throughout the <Link href="/service-areas" className="text-amber-500 hover:underline">Phoenix metro area</Link>.
                </p>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Commercial Security Services</h2>
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

              {/* Hardware Comparison */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Commercial vs. Residential Hardware</h2>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-800">
                        <th className="text-left text-zinc-400 font-medium p-4">Feature</th>
                        <th className="text-left text-amber-500 font-medium p-4">Commercial Grade (1 & 2)</th>
                        <th className="text-left text-zinc-400 font-medium p-4">Residential Grade (3)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hardwareComparison.map((row, index) => (
                        <tr key={index} className="border-b border-zinc-800 last:border-0">
                          <td className="text-zinc-300 p-4">{row.feature}</td>
                          <td className="text-white p-4">{row.commercial}</td>
                          <td className="text-zinc-500 p-4">{row.residential}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Industry Solutions */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Tailored Solutions by Industry</h2>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-800">
                        <th className="text-left text-amber-500 font-medium p-4 w-1/4">Industry</th>
                        <th className="text-left text-zinc-400 font-medium p-4">Recommended Security Solutions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {industrySolutions.map((row, index) => (
                        <tr key={index} className="border-b border-zinc-800 last:border-0">
                          <td className="text-white p-4 font-medium">{row.industry}</td>
                          <td className="text-zinc-400 p-4">{row.solutions}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Commercial Locksmith FAQ</h2>
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
