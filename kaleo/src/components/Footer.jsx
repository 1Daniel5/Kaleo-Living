// Footer Component

import useScrollReveal from '../hooks/useScrollReveal'

function Footer() {
  
  // create scroll reveal refs for different sections
  const ctaRef = useScrollReveal()    // call-to-action area
  const infoRef = useScrollReveal()   // contact info grid
  const logoRef = useScrollReveal()   // Big "Kaleo" logo

  return (
    <footer className="footer">
      
      {/* background image with dark overlay */}
      <div className="footer-bg">
        <img src="/images/footer-bg.jpg" alt="Sunset over ocean" />
      </div>
      <div className="footer-overlay"></div>
      
      {/* Main content container */}
      <div className="footer-content">
        
        
        {/* call to action section */}
        
        <div ref={ctaRef} className="footer-cta reveal">
          <h2 className="footer-heading">Begin Your Journey</h2>
          <p className="footer-desc">
            Join our community of mindful souls seeking a slower, more intentional way of living. 
            Subscribe to receive stories, inspiration, and exclusive updates.
          </p>
          {/* Button with hover effect (CSS) */}
          <button className="footer-btn">
            <span>Subscribe</span>
          </button>
        </div>
        
        
        {/* Info grid - 3 columns */}
        
        <div ref={infoRef} className="footer-info reveal">
          
          {/* column 1: Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact</h4>
            <a href="mailto:hello@kaleoliving.com" className="footer-link">
              hello@kaleoliving.com
            </a>
            <a href="tel:+15551234567" className="footer-link">
              +1 (555) 123-4567
            </a>
          </div>
          
          {/* column 2: Location */}
          <div className="footer-col">
            <h4 className="footer-col-title">Location</h4>
            <p className="footer-text">123 Serenity Lane</p>
            <p className="footer-text">Santa Barbara, CA 93101</p>
          </div>
          
          {/* column 3: Social Media */}
          <div className="footer-col">
            <h4 className="footer-col-title">Follow</h4>
            <div className="footer-socials">
              {/* Instagram link */}
              <a href="#" className="footer-social" target="_blank" rel="noopener">
                <span className="social-icon">IG</span>
              </a>
              {/* Facebook link */}
              <a href="#" className="footer-social" target="_blank" rel="noopener">
                <span className="social-icon">FB</span>
              </a>
            </div>
          </div>
          
        </div>
        
        
        {/* BIG LOGO */}
        
          <div ref={logoRef} className="footer-logo reveal">
            <img src="/kaleo-logo.svg" alt="Kaleo Living" className="footer-logo-img" />
          </div>
        
        
        {/* copyright and links */}
        
        <div className="footer-bottom">
          <p className="footer-copyright">2025 Kaleo Living. All rights reserved.</p>
          <div className="footer-links">
            <a href="/privacy" className="footer-link-small">Privacy Policy</a>
            <a href="/terms" className="footer-link-small">Terms of Service</a>
          </div>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer