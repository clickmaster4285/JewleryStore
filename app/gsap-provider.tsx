'use client'

import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

export default function GSAPProvider() {
  useEffect(() => {
    // GSAP ScrollTrigger config for production
    ScrollTrigger.config({
      ignoreMobileResize: true,
      normalizeScroll: true
    })

    const refreshGSAP = () => {
      ScrollTrigger.refresh()
    }

    // Multiple refreshes for network/prod
    const timeouts = [
      setTimeout(refreshGSAP, 100),
      setTimeout(refreshGSAP, 500),
      setTimeout(refreshGSAP, 1500)
    ]

    // Resize
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(refreshGSAP, 250)
    }

    // Images loaded
    let imageLoadCount = 0
    const totalImages = document.images.length
    const onImageLoad = () => {
      imageLoadCount++
      if (imageLoadCount >= totalImages) {
        setTimeout(refreshGSAP, 300)
      }
    }
    document.querySelectorAll('img').forEach(img => {
      if (img.complete) onImageLoad()
      else img.addEventListener('load', onImageLoad)
    })

    window.addEventListener('resize', handleResize)
    window.addEventListener('load', refreshGSAP)
    window.addEventListener('orientationchange', refreshGSAP)

    return () => {
      timeouts.forEach(clearTimeout)
      clearTimeout(resizeTimeout)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('load', refreshGSAP)
      window.removeEventListener('orientationchange', refreshGSAP)
    }
  }, [])

  return null
}

