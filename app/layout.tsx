import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MobileCallButton } from '@/components/mobile-call-button'
import { ScrollToTop } from '@/components/scroll-to-top'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Phoenix Locksmith | 24/7 Emergency Mobile Lock & Key Service | Alcatraz Lock',
  description: '24/7 Emergency Locksmith Service in Phoenix Metro Area. Fast 20-minute response for car lockouts, house lockouts, key replacement, and more. Licensed & Insured. Call (602) 677-5045',
  keywords: ['locksmith', 'phoenix locksmith', '24/7 locksmith', 'emergency locksmith', 'car lockout', 'house lockout', 'key replacement', 'lock rekey', 'alcatraz lock', 'mobile locksmith'],
  authors: [{ name: 'Alcatraz Lock & Key' }],
  creator: 'Alcatraz Lock & Key',
  publisher: 'Alcatraz Lock & Key',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL('https://alcatrazlock.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Phoenix Locksmith | 24/7 Emergency Mobile Lock & Key Service',
    description: '24/7 Emergency Locksmith Service in Phoenix Metro Area. Fast response for car lockouts, house lockouts, key replacement, and more. Licensed & Insured.',
    url: 'https://alcatrazlock.com',
    siteName: 'Alcatraz Lock & Key',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phoenix Locksmith | 24/7 Emergency Mobile Lock & Key Service',
    description: '24/7 Emergency Locksmith Service in Phoenix Metro Area. Fast response for car lockouts, house lockouts, key replacement, and more.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'googlee7f05cc66aca497b',
  },
}

export const viewport = {
  themeColor: '#f59e0b',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

// Organization Schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://alcatrazlock.com/#organization',
  name: 'Alcatraz Lock & Key',
  alternateName: 'Phoenix Locksmith',
  url: 'https://alcatrazlock.com',
  logo: 'https://alcatrazlock.com/logo.png',
  image: 'https://alcatrazlock.com/og-image.jpg',
  description: '24/7 Emergency Locksmith Service in Phoenix Metro Area. Fast response for car lockouts, house lockouts, key replacement, and more.',
  telephone: '+1-602-677-5045',
  email: 'service@alcatrazlock.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Phoenix',
    addressRegion: 'AZ',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.4484,
    longitude: -112.0740,
  },
  areaServed: [
    { '@type': 'City', name: 'Phoenix', '@id': 'https://en.wikipedia.org/wiki/Phoenix,_Arizona' },
    { '@type': 'City', name: 'Scottsdale' },
    { '@type': 'City', name: 'Tempe' },
    { '@type': 'City', name: 'Mesa' },
    { '@type': 'City', name: 'Glendale' },
    { '@type': 'City', name: 'Peoria' },
    { '@type': 'City', name: 'Paradise Valley' },
    { '@type': 'City', name: 'Chandler' },
    { '@type': 'City', name: 'Gilbert' },
    { '@type': 'City', name: 'Anthem' },
    { '@type': 'City', name: 'Sun City' },
    { '@type': 'City', name: 'Surprise' },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  priceRange: '$$',
  paymentAccepted: 'Cash, Credit Card, Debit Card',
  currenciesAccepted: 'USD',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Locksmith Services',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Automotive Locksmith',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Car Lockout Service' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Car Key Replacement' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Key Fob Programming' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transponder Key Programming' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ignition Repair' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ignition Replacement' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ignition Lock Cylinder Repair' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Motorcycle Key Replacement' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'RV Locksmith Service' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Laser Cut Key Cutting' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sidewinder Key Cutting' } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Residential Locksmith',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'House Lockout Service' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lock Rekeying' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Deadbolt Installation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Smart Lock Installation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Door Lock Repair' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Duplicate Keys' } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Commercial Locksmith',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Master Key Systems' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Access Control Systems' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Panic Bar Installation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Door Locks' } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Safe Locksmith Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Safe Cracking' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Safe Opening' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Safe Repair' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Safe Lock Repair' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Safe Combination Change' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Safe Installation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Safe Moving' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gun Safe Lockout' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gun Safe Locksmith' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Safe Unlock' } },
        ],
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
}

// Website Schema
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://alcatrazlock.com/#website',
  url: 'https://alcatrazlock.com',
  name: 'Alcatraz Lock & Key',
  description: '24/7 Emergency Locksmith Service in Phoenix Metro Area',
  publisher: {
    '@id': 'https://alcatrazlock.com/#organization',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://alcatrazlock.com/?s={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://alcatrazlock.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        <Script 
          src="https://cdn.jotfor.ms/agent/embedjs/019a1172e56a72b48b83297edd6cb63d3c4b/embed.js"
          strategy="lazyOnload"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-zinc-950 text-white`}>
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCallButton />
      </body>
    </html>
  )
}
