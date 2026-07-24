'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import LeadForm from './LeadForm'
import { logoImages } from '../lib/images'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const EnquireModal = ({ isOpen, setIsOpen }) => {
  const autoTriggered = useRef(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (autoTriggered.current) return
    if (typeof window !== 'undefined' && localStorage.getItem('_lsub_done') === '1') return
    const initial = setTimeout(() => {
      autoTriggered.current = true
      setIsOpen(true)
      intervalRef.current = setInterval(() => setIsOpen(true), 30000)
    }, 12000)
    return () => {
      clearTimeout(initial)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [setIsOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative bg-white w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        style={{
          maxWidth: '420px',
          width: '92vw',
          maxHeight: '95vh',
          animation: 'slideInRight 0.45s cubic-bezier(0.22,1,0.36,1) forwards',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-1 flex flex-col overflow-y-auto">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-900 transition-colors bg-gray-50 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center shadow-sm border border-gray-200"
          >
            <X size={16} />
          </button>

          <div className="p-4 sm:p-7 flex flex-col justify-center flex-1 relative">
            
            {/* Compact Side-by-Side Header */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4 mb-3 sm:mb-4 border-b border-gray-100 pb-3 sm:pb-4 mt-1 sm:mt-2">
              <div className="relative w-[150px] sm:w-[130px] h-14 sm:h-16 shrink-0">
                <Image 
                  src={logoImages.main} 
                  alt="Shapoorji Pallonji Dualis Logo" 
                  fill 
                  className="object-contain" 
                />
              </div>
              <div className="flex items-center border-l-0 sm:border-l border-gray-200 sm:pl-4 min-h-[28px] sm:min-h-[40px]">
                <h3 
                  className="text-[14px] sm:text-[14.5px] text-center sm:text-left font-bold text-gray-800 tracking-[0.5px] sm:tracking-[1px] uppercase whitespace-normal sm:whitespace-nowrap leading-tight" 
                  style={{ fontFamily: F_JOST }}
                >
                  Book A Free <span className="text-[var(--color-gold)]">Site Visit</span>
                </h3>
              </div>
            </div>

            {/* Trust Badges / USPs */}
            <div className="bg-[#FAF7F0] rounded-md p-3 px-3 sm:px-4 mb-3 sm:mb-5">
              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-[13px] font-medium text-[#091E2A]" style={{ fontFamily: F_SANS }}>
                <div className="flex items-center gap-1.5">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#117937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                  <span>Zero Brokerage</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#117937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                  <span>RERA Verified</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#117937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                  <span>Vastu Compliant</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#117937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                  <span>Limited Inventory</span>
                </div>
              </div>
            </div>

            {/* Form Component - Untouched Logic */}
            <LeadForm formName="Popup Modal" btnText="Submit Details" />
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnquireModal


