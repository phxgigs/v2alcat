"use client"

import { Phone, Mail, MapPin, Clock, Shield, Zap, CheckCircle, CreditCard, MessageCircle } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone (24/7)",
    value: "(602) 677-5045",
    subtitle: "Immediate response for emergencies",
    href: "tel:6026775045",
  },
  {
    icon: Mail,
    title: "Email",
    value: "service@alcatrazlock.com",
    subtitle: "For non-urgent inquiries",
    href: "mailto:service@alcatrazlock.com",
  },
  {
    icon: MapPin,
    title: "Service Area",
    value: "Phoenix Metro Area",
    subtitle: "Phoenix, Scottsdale, Tempe, Glendale, Peoria, Paradise Valley, Anthem, Sun City",
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Open 24 Hours / 7 Days",
    subtitle: "Including Holidays",
  },
]

const whyCallUs = [
  "Fast 20-Minute Response",
  "Licensed, Bonded & Insured",
  "Upfront, Honest Pricing",
  "100% Satisfaction Guarantee",
]

const faqs = [
  {
    question: "What is the best way to contact you for an emergency?",
    answer: "For emergencies, call us directly at (602) 677-5045. Our phone lines are staffed 24/7 and we can dispatch a technician immediately.",
  },
  {
    question: "How long does it take for a technician to arrive?",
    answer: "Our average response time is 20-30 minutes throughout the Phoenix Metro Area. We'll give you an estimated arrival time when you call.",
  },
  {
    question: "Can I get a quote over the phone?",
    answer: "Yes, we provide free quotes over the phone. Describe your situation and we'll give you an upfront price before dispatching a technician.",
  },
  {
    question: "Do you have a physical shop I can visit?",
    answer: "We are a fully mobile service, so we don't have a storefront. This allows us to come directly to you anywhere in the valley.",
  },
  {
    question: "What information do you need when I call?",
    answer: "Please have your location, the type of service needed (car, home, business), and your contact information ready. For automotive services, having your vehicle make, model, and year is helpful.",
  },
  {
    question: "Do you offer service on weekends and holidays?",
    answer: "Yes, we operate 24 hours a day, 7 days a week, 365 days a year - including all holidays.",
  },
  {
    question: "Are there any hidden fees?",
    answer: "No. We believe in transparent pricing. The quote we give you over the phone is the price you pay, unless the job scope changes once we're on-site (which we'll discuss with you first).",
  },
  {
    question: "Do you accept credit cards?",
    answer: "Yes, we accept all major credit cards, debit cards, and cash. We can process payments on-site.",
  },
  {
    question: "Is your work guaranteed?",
    answer: "Yes, all our work is backed by a satisfaction guarantee. We also offer warranties on parts and labor depending on the service performed.",
  },
  {
    question: "Do you service areas outside of Phoenix?",
    answer: "We primarily serve the Phoenix Metropolitan area, but we can accommodate locations outside our standard service area for an additional fee. Call us to discuss your specific location.",
  },
]

export default function ContactPage() {
  return (
    <div className="bg-zinc-950">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-4">
            <Phone className="w-4 h-4" />
            24/7 Dispatch
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl">
            We&apos;re here to help 24 hours a day, 7 days a week.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                    <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-amber-500" />
                    </div>
                    <h3 className="text-zinc-400 text-sm mb-1">{item.title}</h3>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-white font-semibold text-lg hover:text-amber-500 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold text-lg">{item.value}</p>
                    )}
                    <p className="text-zinc-500 text-sm mt-1">{item.subtitle}</p>
                  </div>
                ))}
              </div>

              {/* Why Call Us */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Why Call Us?</h3>
                <ul className="space-y-3">
                  {whyCallUs.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-zinc-300">
                      <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Contact Form / JotForm */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-white">Send Us a Message</h2>
              <p className="text-zinc-400">
                Fill out the form below for a free quote or to schedule a non-emergency appointment. For urgent matters, please call us directly.
              </p>
              
              {/* JotForm Agent Chat Button */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 cursor-pointer hover:bg-amber-400 transition-colors" onClick={() => {
                    // Trigger JotForm chat widget
                    const chatButton = document.querySelector('[data-jotform-agent]') as HTMLElement;
                    if (chatButton) chatButton.click();
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Chat With Us Now</h3>
                  <p className="text-zinc-400 mb-6">
                    Our AI assistant is available 24/7 to help you get a free quote or schedule service.
                  </p>
                  <button 
                    className="inline-flex items-center gap-2 bg-amber-500 text-zinc-900 font-semibold px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors"
                    onClick={() => {
                      // Trigger JotForm chat widget - fallback to looking for iframe or widget
                      const jotformWidget = document.querySelector('iframe[src*="jotform"]') as HTMLElement;
                      const agentWidget = document.querySelector('[class*="agent"]') as HTMLElement;
                      if (jotformWidget) jotformWidget.click();
                      else if (agentWidget) agentWidget.click();
                      // Also try triggering via window event
                      window.dispatchEvent(new CustomEvent('openJotformChat'));
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Start Chat
                  </button>
                  <p className="text-zinc-500 text-sm mt-4">
                    Or look for the chat icon in the bottom right corner of your screen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">Contact FAQ</h2>
            <div className="max-w-3xl">
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
        </div>
      </section>
    </div>
  )
}
