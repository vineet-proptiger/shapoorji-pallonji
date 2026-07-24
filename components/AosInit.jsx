'use client'
import { useEffect } from 'react'

export default function AosInit() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-aos]')

    document.body.setAttribute('data-aos-duration', '700')
    document.body.setAttribute('data-aos-easing', 'ease-out-cubic')
    elements.forEach((element) => element.classList.add('aos-init'))

    // AOS resets only when scrolling above an element's trigger point. Using
    // IntersectionObserver resets on either edge of the viewport, so the same
    // animation plays when entering from both the top and the bottom.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('aos-animate', entry.isIntersecting)
        })
      },
      { threshold: 0.08 }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])
  return null
}
