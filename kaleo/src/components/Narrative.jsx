// narrative component for the text section with spinning stars


// Import the custom hook for scroll animations
import useScrollReveal from '../hooks/useScrollReveal'

function Narrative() {
  
  
  // refs for the three animated elements
  
  // Each ref will be attached to a different text line
  // When scrolled into view, each will fade in independently
  
  const ref1 = useScrollReveal()  // For "Find beauty in the everyday"
  const ref2 = useScrollReveal()  // For "Moments of calm in a busy world"
  const ref3 = useScrollReveal()  // For the paragraph text

  return (
    <section className="narrative">
      <div className="narrative-container">
        
        
        {/* left star decoration */}
        
        {/* 
          This star spins continuously css animation
          It's positioned outside the text flow
          "star-left" positions it to the left of the text
        */}
        <div className="star-decoration star-left">
          <div className="star-css">★</div>
        </div>
        

        {/* the text content */}
        
        <div className="narrative-text">
          
          {/* 
            ref={ref1} attaches the scroll reveal hook
            className="reveal" = starts hidden, will fade in when revealed class is added
            the big heading
          */}
          <h2 ref={ref1} className="narrative-line1 reveal">
            Find beauty in the everyday
          </h2>
          
          {/* 
            ref={ref2} = second scroll reveal
            the italic subtitle
          */}
          <p ref={ref2} className="narrative-line2 reveal">
            Moments of calm in a busy world
          </p>
          
          {/* 
            ref={ref3} = third scroll reveal
            the descriptive paragraph
          */}
          <p ref={ref3} className="narrative-line3 reveal">
            We believe that true luxury lies in simplicity. In the warmth of morning light, 
            the comfort of natural materials, and the joy of being present. Our philosophy 
            embraces slow living as a pathway to a more meaningful life.
          </p>
          
        </div>
        
        {/* right star decoration */}
        <div className="star-decoration star-right">
          <div className="star-css">★</div>
        </div>
        
      </div>
    </section>
  )
}

export default Narrative