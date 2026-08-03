'use client'
import React, { useState } from 'react'
import { projectImages } from '../../lib/sector-46-gurgaon/images'

const Projects = ({ setIsOpen }) => {
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="projects" className="projects-section">
      <style jsx>{`
        .projects-section {
          box-sizing: border-box;
          padding: 80px 0px;
          position: relative;
          background: #ffffff;
          overflow: hidden;
        }
        .project-card {
          border-radius: 14px;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 8px 24px rgba(0, 2, 66, 0.06);
          border: 1px solid rgba(0, 2, 66, 0.06);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
        }
        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(0, 2, 66, 0.15);
        }
        .hide-mobile-card {
          display: none !important;
        }
        .see-more-btn-container {
          display: flex !important;
          justify-content: center;
          margin-top: 40px;
        }
        .project-img-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background-color: #000242;
        }
        .project-img-wrapper :global(img) {
          transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .project-card:hover .project-img-wrapper :global(img) {
          transform: scale(1.08);
        }
        .project-label-box {
          padding: 12px 8px;
          background: #f8f7fd;
          border-top: 1px solid rgba(0, 2, 66, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-grow: 1;
          min-height: 48px;
        }
        .project-label {
          color: #000242;
          font-family: "Montserrat", sans-serif;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          text-align: center;
          line-height: 1.3;
          margin: 0;
          transition: color 0.3s ease;
        }
        .project-card:hover .project-label {
          color: #CA6A27;
        }
        @media (min-width: 640px) {
          .project-card {
            border-radius: 16px;
          }
          .project-label-box {
            padding: 16px 14px;
            min-height: 60px;
          }
          .project-label {
            font-size: 15px;
            letter-spacing: 0.04em;
          }
        }
        @media (min-width: 768px) {
          .hide-mobile-card {
            display: flex !important;
          }
          .see-more-btn-container {
            display: none !important;
          }
        }
        @media (min-width: 1024px) {
          .project-label-box {
            padding: 20px 15px;
            min-height: 66px;
          }
          .project-label {
            font-size: 17px;
          }
        }
      `}</style>

      <div className="container mx-auto px-3 sm:px-6 lg:px-8 max-w-[1450px] relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" data-aos-duration="1000" className="mb-10 sm:mb-12">
          <h2 className="text-[22px] sm:text-[30px] md:text-[38px] font-semibold leading-tight uppercase tracking-wider text-[#000242] text-center" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif", marginBottom: '10px' }}>
         PROJECTS DELIVERED BY SHAPOORJI PALLONJI          </h2>
          {/* Decorative Line */}
          <div className="flex items-center justify-center mt-2.5 mb-4">
            <div className="w-16 h-[1px] bg-[#CA6A27]"></div>
            <div className="w-2 h-2 rounded-full bg-[#CA6A27] mx-3"></div>
            <div className="w-16 h-[1px] bg-[#CA6A27]"></div>
          </div>
          {/* <p className="text-gray-600 font-normal text-[14px] sm:text-[17px] text-center max-w-2xl mx-auto tracking-wide font-['Poppins'] px-2">
            A timeless legacy of engineering marvels and landmark masterpieces crafted across the nation.
          </p> */}
        </div>

        {/* Responsive Grid: 2 columns on mobile/small devices, 3 on tab, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-7">
          {projectImages.map((item, index) => (
            <div 
              key={index}
              className={`project-card cursor-pointer group ${index >= 4 && !showAll ? 'hide-mobile-card' : ''}`}
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay={(index % 4) * 100}
              onClick={() => setIsOpen && setIsOpen(true)}
            >
              <div className="project-img-wrapper">
                <img
                  src={item.src}
                  alt={item.alt || item.label}
                  className="w-full h-full object-cover block"
                  loading={index < 4 ? "eager" : "lazy"}
                />
              </div>
              <div className="project-label-box">
                <h3 className="project-label">{item.label}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button (Visible ONLY on small screens after initial 4 items) */}
        {projectImages.length > 4 && (
          <div className="see-more-btn-container" data-aos="fade-up">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3.5 bg-[#CA6A27] hover:bg-[#b3581e] text-white font-semibold rounded-full uppercase tracking-widest text-[13px] sm:text-[15px] transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <span>{showAll ? 'Show Less' : 'See More'}</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

      </div>
    </section>
  )
}

export default Projects
