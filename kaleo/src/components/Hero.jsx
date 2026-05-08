// hero component is the big fullscreen image at the top
import { useEffect, useRef } from 'react'

import heroBg from '../images/hero-bg.jpg'    
import kaleoLogo from '../kaleo-logo.svg'      

function Hero() {
  const bgRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      if (bgRef.current) {
        bgRef.current.style.transform = `scale(1.1) translateY(${scrolled * 0.3}px)`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero">
      <div className="hero-bg-container">
        <img 
          ref={bgRef}
          src={heroBg} 
          alt="Couple walking through olive grove at golden hour" 
          className="hero-bg" 
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <img src={kaleoLogo} alt="Kaleo Living" className="hero-logo-img" />
      </div>
    </section>
  )
}

export default Hero