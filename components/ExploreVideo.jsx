'use client'
import { useState } from 'react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const ExploreVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="explore-area" style={{ background: '#f9f9f9', padding: '72px 0 80px', borderBottom: '1px solid #f0ede6' }}>
      <style>{`
        .vt-play-btn {
          width: 80px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: #FF0000;
          z-index: 10;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 20px rgba(255, 0, 0, 0.4);
          cursor: pointer;
        }
        @media (min-width: 768px) {
          .vt-play-btn {
            width: 100px;
            height: 70px;
            border-radius: 18px;
          }
        }
        .vt-play-btn:hover {
          transform: scale(1.12);
          box-shadow: 0 12px 30px rgba(255, 0, 0, 0.6);
        }
        .ripple-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 2px solid #FF0000;
          border-radius: 50%;
          animation: pulse-ring 2.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
          pointer-events: none;
        }
        .ripple-ring:nth-child(2) {
          animation-delay: 0.8s;
        }
        @keyframes pulse-ring {
          0% { width: 100%; height: 100%; opacity: 1; }
          100% { width: 160%; height: 160%; opacity: 0; }
        }
      `}</style>
      
      <div className="container mx-auto px-4 sm:px-8 max-w-[1200px]">
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 data-aos="flip-left" data-aos-delay="300" style={{
            fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
            color: '#684C1B', letterSpacing: '0.1em',
            textTransform: 'uppercase', margin: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            Explore Our Villa
          </h2>
        </div>

        {/* Video Container */}
        <div 
          className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-[#D5C2A8] group cursor-pointer bg-black" 
          style={{ aspectRatio: '16/9' }}
          data-aos="fade-up" 
          data-aos-delay="400"
          onClick={() => setIsPlaying(true)}
        >
          {!isPlaying ? (
            <>
              {/* Thumbnail Image */}
              <img 
                src="https://img.youtube.com/vi/t7PfyAATHDc/maxresdefault.jpg" 
                alt="Video Thumbnail" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark Overlay Background */}
              <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/30" />
              
              {/* Centered Play Button Container */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-20">
                <div className="relative flex items-center justify-center w-[90px] h-[90px] md:w-[120px] md:h-[120px]">
                  <div className="vt-play-btn">
                    <svg className="w-8 h-8 md:w-10 md:h-10 ml-[2px] md:ml-1" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                  <div className="ripple-ring"></div>
                  <div className="ripple-ring"></div>
                </div>
              </div>
            </>
          ) : (
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/t7PfyAATHDc?autoplay=1&si=x4q-qSnS3gnseJ-G" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </section>
  )
}

export default ExploreVideo
