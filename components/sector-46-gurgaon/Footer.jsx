'use client'
import React from 'react'
import Link from 'next/link'


const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const Footer = () => (
  <footer className="relative bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/sector-46-gurgaon/images/footer/footer.webp')", color: '#fff' }}>
    {/* Removed blue overlay as requested */}

    <div className="relative z-10">
      <div className="max-w-[860px] mx-auto px-2 sm:px-6 pt-14 pb-8 text-center">
        <h2 
          className="text-[21px] sm:text-[28px] md:text-[36px] font-semibold leading-tight uppercase tracking-wide mb-2 text-white whitespace-nowrap sm:whitespace-normal" 
          style={{ fontFamily: F_JOST }} 
          data-aos="fade-in"
        >
          About The Developer
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--color-gold)', fontFamily: F_JOST, fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>
          3 &amp; 4 BHK LUXURY RESIDENCES — SECTOR 46, GURGAON
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <span style={{ width: '36px', height: '2.5px', background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))', borderRadius: '2px' }} />
        </div>
        <p style={{ fontSize: '15px', color: '#fff', fontFamily: 'var(--font-poppins), sans-serif', lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify' }}
          data-aos="fade-in" data-aos-delay="100">
          The luxury residential project, Shapoorji Pallonji Dualis introduces the best 3 &amp; 4 BHK apartments in Gurugram, Sector 46. Along with bespoke conveniences the reputed developer aims to render privacy.
        </p>
        <p style={{ fontSize: '15px', color: '#fff', fontFamily: 'var(--font-poppins), sans-serif', lineHeight: 1.8, marginBottom: '28px', textAlign: 'justify' }}
          data-aos="fade-in" data-aos-delay="150">
          Shapoorji Pallonji and Company Pvt. Ltd. is a global, diversified organisation of 15 major companies. We deliver end-to-end solutions in 6 business segments, including engineering &amp; construction, infrastructure, real estate, water, energy and financial services. Our dedicated workforce of over 33,000+ people in over 40 countries is focused on sustainable development while developing megastructures and iconic landmarks.
        </p>
        
        {/* RERA Block */}
        <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '10px 24px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <span style={{ fontFamily: F_SANS, fontSize: '14px', color: '#aaa' }}>RERA No : </span>
          <strong style={{ fontFamily: F_JOST, fontSize: '15px', color: '#fff', letterSpacing: '0.04em', wordBreak: 'break-word' }}>RC/REP/HARERA/GGM/939/671/2025/42</strong>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 py-4 px-6 border-t border-[#222] text-center sm:text-left max-w-[1200px] mx-auto">
        <p style={{ fontSize: '13px', color: '#888', fontFamily: F_SANS }}>
          &copy; 2026 Shapoorji Pallonji Dualis. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          <Link href="/sector-46-gurgaon/privacy-policy" style={{ fontSize: '13px', color: 'var(--color-gold)', fontFamily: F_SANS }}>
            Privacy Policy
          </Link>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '12px 24px 20px', textAlign: 'center' }}>
        <p style={{ fontSize: '10.5px', color: '#999', fontFamily: F_SANS, lineHeight: 1.7, textAlign: 'justify' }}>
          <strong style={{ color: '#bbb' }}>Disclaimer:</strong> This is not the official website of the developer. The information depicted herein, including master plans, floor plans, furniture layout, fittings, illustrations, specifications, designs, dimensions, rendered views, colours, amenities and facilities etc., are subject to change without notification as may be required by the relevant authorities or the Developer&apos;s architect. This advertisement is an invitation to offer and shall not be construed as an offer or contract. * Prices subject to change without notice. All taxes extra as applicable.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
