// hero component is the big fullscreen image at the top

// Import useEffect for side effects and useRef for DOM references
import { useEffect, useRef } from 'react'

function Hero() {
  
  // create ref for background image
  
  // directly manipulate the image element for the parallax effect
  // useRef gives us a way to grab this element and change it with js
  const bgRef = useRef(null)

  // useEffect set up the parallax scroll effect
  
  useEffect(() => {
    
    // This function runs every time scroll
    const handleScroll = () => {
      // window.scrollY = how many pixels we have scrolled down
      const scrolled = window.scrollY
      
      // If the background image exists, move it
      if (bgRef.current) {
        // Move the image down at 30% of the scroll speed parallax effect
        // scale(1.1) keeps the image slightly zoomed in so edges don't show when moving
        bgRef.current.style.transform = `scale(1.1) translateY(${scrolled * 0.3}px)`
      }
    }

    // Add the scroll event listener
    // Every tim we scroll, call handleScroll
    window.addEventListener('scroll', handleScroll)
    
    // cleanup remove the event listener when component unmounts
    
    // If we don't do this, the listener keeps running even after the component is gone
    
    return () => window.removeEventListener('scroll', handleScroll)
    
  // Empty dependency array = run once when component appears
  }, [])

  // ============================================
  // return jsx renders on screen
  // ============================================
  
  return (
    // section is a semantic HTML tag 
    <section className="hero">
      
      {/* Container for the background image */}
      <div className="hero-bg-container">
        {/* 
          ref={bgRef} attaches the ref to this img element
          bgRef.current points to this exact image in the DOM
          this allows me to manipulate it directly with JavaScript
        */}
        <img 
          ref={bgRef}
          src="/images/hero-bg.jpg" 
          alt="Couple walking through olive grove at golden hour" 
          className="hero-bg" 
        />
      </div>
      
      {/* Dark overlay to make text readable over the image */}
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <img src="/kaleo-logo.svg" alt="Kaleo Living" className="hero-logo-img" />
      </div>
      
    </section>
  )
}

// Export so App.jsx can import and use this component
export default Hero