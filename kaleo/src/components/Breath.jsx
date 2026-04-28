// breath component breathe image section

import useScrollReveal from '../hooks/useScrollReveal'

function Breath() {
  
  // create three scroll reveal refs for different elements
  const wrapperRef = useScrollReveal()  // For the image wrapper (scale animation)
  const titleRef = useScrollReveal()    // For the "Breathe" title
  const descRef = useScrollReveal()     // For the description text

  return (
    <section className="breath">
      <div className="breath-container">
        
        {/* 
          image wrapper with scale reveal
          starts smal scale 0.9 and grows to full size
          ref={wrapperRef} attaches the scroll reveal hook
          className includes "reveal-scale" for the scaling effect
        */}
        <div ref={wrapperRef} className="breath-image-wrapper reveal-scale">
          <img 
            src="/images/breath-bg.jpg" 
            alt="Misty morning over tranquil lake with mountains" 
            className="breath-image" 
          />
          
          {/* overlay with text on top of the image */}
          <div className="breath-overlay">
            {/* Big Breathe title with scroll reveal */}
            <h2 ref={titleRef} className="breath-title reveal">Breathe</h2>
            {/* Subtitle */}
            <p className="breath-subtitle">Find Your Center</p>
          </div>
          
        </div>
        
        {/* Description paragraph below the image */}
        <div ref={descRef} className="breath-description reveal">
          <p>
            In the stillness of nature, we discover ourselves. Take a moment to pause, 
            breathe deeply, and reconnect with what truly matters. This is the essence of Kaleo Living.
          </p>
        </div>
        
      </div>
    </section>
  )
}

export default Breath