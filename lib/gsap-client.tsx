'use client'

import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

function GSAPClient() {
  useEffect(() => {
    // Wait for full hydration and layout
    const refreshGSAP = () => {
      if (typeof window !== 'undefined') {
        ScrollTrigger.refresh()
      }
    }

    // Refresh on mount
    const timeoutId = setTimeout(refreshGSAP, 100)

    // Refresh on resize
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(refreshGSAP, 250)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('load', refreshGSAP)

    return () => {
      clearTimeout(timeoutId)
      clearTimeout(resizeTimeout)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('load', refreshGSAP)
    }
  }, [])

  return null
}

export default GSAPClient

