import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Open_Sans, Montserrat, Cormorant_Garamond, Poppins } from 'next/font/google'
import { CITY_DISPLAY } from '../../lib/sector-46-gurgaon/config'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://shapoorjipallonjidualis.co.in/'),
  title: 'Shapoorji Pallonji Dualis | 3 & 4 BHK Luxury Residences in Sector 46, Gurgaon',
  description: "Escape to bountiful freshness and host yourself to an impeccable living atmosphere in Gurugram's Sector 46. An exotic green landscape compliments a stupendous 2-acre residential complex.",
  alternates: {
    canonical: 'https://shapoorjipallonjidualis.co.in/sector-46-gurgaon',
  },
  openGraph: {
    title: 'Shapoorji Pallonji Dualis | 3 & 4 BHK Luxury Residences in Sector 46, Gurgaon',
    description: "Escape to bountiful freshness and host yourself to an impeccable living atmosphere in Gurugram's Sector 46. An exotic green landscape compliments a stupendous 2-acre residential complex.",
    url: 'https://shapoorjipallonjidualis.co.in/sector-46-gurgaon',
    siteName: 'Shapoorji Pallonji Dualis',
    images: [
      {
        url: '/sector-46-gurgaon/images/hero/banner1.webp',
        width: 1200,
        height: 630,
        alt: 'Shapoorji Pallonji Dualis Sector 46 Gurgaon',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shapoorji Pallonji Dualis | 3 & 4 BHK Luxury Residences in Sector 46, Gurgaon',
    description: "Escape to bountiful freshness and host yourself to an impeccable living atmosphere in Gurugram's Sector 46.",
    images: ['/sector-46-gurgaon/images/hero/banner1.webp'],
  },
}

import SmoothScroll from '../../components/sector-46-gurgaon/SmoothScroll'

export default function RootLayout({ children }) {  
  return (
    <div className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} ${poppins.variable} font-sans text-dark antialiased`}>
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <Script
        id="json-ld-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Shapoorji Pallonji Dualis",
              "url": "https://shapoorjipallonjidualis.co.in/sector-46-gurgaon",
              "logo": "https://shapoorjipallonjidualis.co.in/sector-46-gurgaon/images/logo/Logo.png",
              "image": "https://shapoorjipallonjidualis.co.in/sector-46-gurgaon/images/hero/banner1.webp",
              "description": "The luxury residential project, Shapoorji Pallonji Dualis introduces the best 3 & 4 BHK apartments in Gurugram, Sector 46.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sector 46",
                "addressLocality": "Gurugram",
                "addressRegion": "Haryana",
                "postalCode": "122003",
                "addressCountry": "IN"
              },
              "telephone": "+919718344024",
              "priceRange": "₹ 6.99 Cr Onwards",
              "sameAs": [
                "https://shapoorjipallonjidualis.co.in"
              ]
            })
          }}
        />
      <Script id="gtag-init" strategy="beforeInteractive">
        {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`} 
      </Script>
      <SmoothScroll>
        {children}
      </SmoothScroll>
    </div>
  )
}
