'use client'

import Image from 'next/image'
import { overviewImage } from '../lib/images'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'



/* Curved concave notch at each corner of the info box */
const CurvedCorners = ({ bg = '#fff' }) => {
  const corners = [
    { top: '-1px', left: '-1px', borderRight: '1px solid #D5C2A8', borderBottom: '1px solid #D5C2A8', borderBottomRightRadius: '18px' },
    { top: '-1px', right: '-1px', borderLeft: '1px solid #D5C2A8', borderBottom: '1px solid #D5C2A8', borderBottomLeftRadius: '18px' },
    { bottom: '-1px', left: '-1px', borderRight: '1px solid #D5C2A8', borderTop: '1px solid #D5C2A8', borderTopRightRadius: '18px' },
    { bottom: '-1px', right: '-1px', borderLeft: '1px solid #D5C2A8', borderTop: '1px solid #D5C2A8', borderTopLeftRadius: '18px' },
  ]

  return corners.map((c, i) => (
    <span key={i} style={{
      position: 'absolute', ...c,
      width: '22px', height: '22px',
      background: bg,
      display: 'block',
    }} />
  ))
}

const infoItems = [
  { label: 'Status',             value: 'New Launch', bgColor: '#FDF8F6' },
  { label: 'Floors',             value: 'G+40', bgColor: '#FFFDF2' },
  { label: 'Units',              value: '198', bgColor: '#F4FAF4' },
  { label: 'Total\u00A0Project\nArea', value: '2 ACRES', bgColor: '#F2FAFD' },
]

const Overview = ({ setIsOpen }) => {
  
  return (
    <section
      id="overview"
      style={{ scrollMarginTop: '80px', background: '#fff', padding: '72px 0 80px', borderBottom: '1px solid #f0ede6' }}
    >
      <div className="container mx-auto px-4 sm:px-8 max-w-[1200px]">
      
      {/* ── Mobile Section Heading ── */}
      <div className="block lg:hidden" style={{ marginBottom: '32px', textAlign: 'left' }}>
        <h2 data-aos="flip-right" data-aos-delay="500" style={{
          fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
          color: '#3A2A0E', letterSpacing: '0.1em',
          textTransform: 'uppercase', margin: '0 0 10px 0',
          display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px'
        }}>
          Welcome to Shapoorji Pallonji Dualis
        </h2>
        <h3 style={{
          fontFamily: F_JOST, fontWeight: '500', fontSize: '14px',
          color: '#C9A96E', letterSpacing: '0.05em',
          textTransform: 'capitalize', margin: 0,
        }}>
          Luxury Residential Project in Gurugram, Sector 46
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14">
        
        {/* ── Left Side: Text Content ── */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          
          {/* ── Desktop Section Heading ── */}
          <div className="hidden lg:block" style={{ marginBottom: '40px', textAlign: 'left' }}>
            <h2 data-aos="flip-right" data-aos-delay="500" style={{
              fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
              color: '#3A2A0E', letterSpacing: '0.1em',
              textTransform: 'uppercase', margin: '0 0 10px 0',
              display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px'
            }}>
              Welcome to Shapoorji Pallonji Dualis
            </h2>
            <h3 style={{
              fontFamily: F_JOST, fontWeight: '500', fontSize: '14px',
              color: '#C9A96E', letterSpacing: '0.05em',
              textTransform: 'capitalize', margin: 0,
            }}>
              Luxury Residential Project in Gurugram, Sector 46
            </h3>
          </div>
          
          {/* Paragraphs */}
          <p data-aos="flip-down" data-aos-delay="500" style={{
            fontFamily: F_SANS, fontSize: '14.5px', color: '#4A4540',
            lineHeight: 1.9,
            marginTop: 0, marginBottom: '24px',
            textAlign: 'justify',
          }}>
            Escape to bountiful freshness and host yourself to an impeccable living atmosphere in Gurugram's Sector 46. An exotic green landscape compliments a stupendous 2-acre residential complex. The luxury residential project, Shapoorji Pallonji Dualis introduces the best 3.5 & 4.5 BHK apartments in Gurugram, Sector 46. Along with bespoke conveniences the reputed developer aims to render privacy. The state-of-the-art Clubhouse and water bodies here are idyllic places to relax and rejuvenate. The strategic positioning of Shapoorji Pallonji Dualis in Gurugram makes way for unclogged travel via Sohna Road, Udyog Road, and Cyber City Road in a radius of 20 minutes.
          </p>

          {/* Info Box */}
          <div
            className="hidden lg:block"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-offset="0"
            style={{
              position: 'relative',
              border: '1px solid #D5C2A8',
              overflow: 'hidden',
            }}
          >
            <CurvedCorners />

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-[1px]" style={{ background: '#D5C2A8' }}>
            {infoItems.map((item, i) => (
              <div key={i} className="flex flex-col justify-center" style={{
                background: item.bgColor || '#fff',
                padding: '20px 8px',
                textAlign: 'left',
              }}>
                <div data-aos="fade" data-aos-delay={600 + i * 150} data-aos-duration="800">
                  <p style={{
                    fontFamily: F_JOST, fontSize: '10px', fontWeight: '500',
                    color: '#b5a99a', letterSpacing: '0.18em',
                    textTransform: 'uppercase', margin: '0 0 8px',
                  }}>
                    {item.label}:
                  </p>
                  <p className="whitespace-normal" style={{
                    fontFamily: F_JOST, fontSize: '12px', fontWeight: '700',
                    color: '#3A2A0E', letterSpacing: '0.05em',
                    textTransform: 'uppercase', margin: 0,
                  }}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
            </div>
          </div>

        </div>

        {/* ── Right Side: Image ── */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 order-1 lg:order-2" data-aos="fade-left">
          <div className="relative w-full flex justify-center items-center">
            <Image 
              src={overviewImage} 
              alt="Shapoorji Pallonji Dualis Overview" 
              width={1000}
              height={1200}
              className="w-[95%] lg:w-[75%] h-auto object-contain mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
  )
}

export default Overview
