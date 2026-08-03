'use client'
import { MapPin } from 'lucide-react'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const locationLandmarks = [
  { name: 'HUDA City Centre Metro Station', dist: '5 Mins' },
  { name: 'Gurugram Railway Station', dist: '18 Mins' },
  { name: 'Indira Gandhi International Airport', dist: '35 Mins' },
  { name: 'Medanta – The Medicity', dist: '10 Mins' },
  { name: 'Fortis Hospital', dist: '12 Mins' },
  { name: 'Delhi Public School (DPS), Sector 43', dist: '10-12 Mins' },
  { name: 'Manav Rachna International School', dist: '10 Mins' },
  { name: 'MG Road and major malls', dist: '15 Mins' },
  { name: 'Cyber City / Udyog Vihar', dist: '20 Mins' },
]

const Location = () => {
  return (
    <section id="location" style={{
      padding: '72px 0',
      backgroundImage: "url('/sector-46-gurgaon/images/highlights/highlight.webp')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">

        {/* Section Header */}
        <div style={{ marginBottom: '50px', textAlign: 'center' }} data-aos="fade-down" data-aos-duration="1000">
           <h2
             className="text-[22px] sm:text-[28px] md:text-[36px] font-semibold leading-tight uppercase tracking-wider text-[#CA6A27]"
             style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif", marginBottom: '12px' }}
           >
             LOCATION ADVANTAGES
           </h2>
           {/* Decorative Line */}
           <div className="flex items-center justify-center mt-3 mb-2">
             <div className="w-16 h-[1px] bg-[#7d9b93]"></div>
             <div className="w-2 h-2 rounded-full bg-[#7d9b93] mx-3"></div>
             <div className="w-16 h-[1px] bg-[#7d9b93]"></div>
           </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* RIGHT — Clean Landmarks List (Replaced Accordion) */}
          <div className="w-full lg:w-[46%] lg:order-2" data-aos="fade-left" data-aos-duration="1000">
            <div style={{
              padding: '16px 26px',
              borderRadius: '16px',
              background: '#f8f2ec',
              border: '1px solid #d5bd7e',
              boxShadow: '0 12px 32px rgba(0, 2, 66, 0.12)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}>
              <h3 style={{
                fontFamily: F_JOST,
                fontSize: '19px',
                fontWeight: '600',
                color: '#000242',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '10px',
                paddingBottom: '10px',
                borderBottom: '2px solid #d5bd7e',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <MapPin size={22} className="text-[#005a50]" />
                <span>SEAMLESS CONNECTIVITY</span>
              </h3>

              <div className="flex flex-col">
                {locationLandmarks.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '7px 4px',
                      borderBottom: index === locationLandmarks.length - 1 ? 'none' : '1px solid rgba(213, 189, 126, 0.45)',
                      fontFamily: F_SANS,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '2px',
                        background: '#005a50',
                        display: 'inline-block',
                        flexShrink: 0,
                      }} />
                      <span style={{
                        fontSize: '15px',
                        color: '#000242',
                        fontWeight: '500',
                      }}>
                        {item.name}
                      </span>
                    </div>
                    <span style={{
                      fontSize: '15px',
                      color: '#000242',
                      fontWeight: '700',
                      fontFamily: F_JOST,
                      whiteSpace: 'nowrap',
                      marginLeft: '16px',
                    }}>
                      {item.dist}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* LEFT — Google Maps Iframe */}
          <div className="w-full lg:flex-1 lg:order-1 flex flex-col justify-center" data-aos="fade-right" data-aos-duration="1000">
            <div style={{
              overflow: 'hidden',
              border: '1px solid #CA6A27',
              borderRadius: '16px',
              width: '100%',
              height: '100%',
              minHeight: '420px',
              position: 'relative',
              background: '#0a0f1d',
              boxShadow: '0 12px 32px rgba(0, 2, 66, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.3966175282417!2d77.0530996!3d28.437458099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19002b67be4d%3A0x3de978035c482907!2sShapoorji%20Pallonji%20Dualis!5e0!3m2!1sen!2sin!4v1784871947698!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px', width: '100%', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px', zIndex: 10,
                background: 'var(--color-gold, #CA6A27)', opacity: 0.95, backdropFilter: 'blur(6px)',
                borderRadius: '8px', padding: '6px 14px',
                display: 'flex', alignItems: 'center', gap: '6px',
                pointerEvents: 'none',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)'
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{
                  color: '#fff', fontSize: '12px', fontFamily: F_JOST,
                  fontWeight: '700', letterSpacing: '0.04em'
                }}>
                  Sector 46, Gurugram
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location
