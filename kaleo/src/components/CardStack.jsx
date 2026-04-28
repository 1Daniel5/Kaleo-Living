// CARD STACK COMPONENT - Stacking cards on scroll


// useState = store and update data that changes over time
// useEffect = runs side effects like event listeners
// useRef = creates references to DOM elements
import { useState, useEffect, useRef } from 'react'

import useScrollReveal from '../hooks/useScrollReveal'

const cardsData = [
  {
    id: crypto.randomUUID,
    image: '/images/card-1.jpg',
    alt: 'Morning coffee ritual',
    title: 'Morning Rituals',
    desc: 'Start each day with intention. A warm cup, soft light, and a moment of quiet reflection.',
    rotation: -2  // slight tilt angle for visual interest
  },
  {
    id: crypto.randomUUID,
    image: '/images/card-2.jpg',
    alt: 'Peaceful living room',
    title: 'Sacred Spaces',
    desc: 'Create a home that nurtures your soul. Natural materials, thoughtful design, and peaceful energy.',
    rotation: 1
  },
  {
    id: crypto.randomUUID,
    image: '/images/card-3.jpg',
    alt: 'Woman practicing yoga',
    title: 'Mindful Movement',
    desc: 'Connect body and breath. Find balance through practices that ground and center you.',
    rotation: -1
  }
]


// MAIN CARD STACK COMPONENT


function CardStack() {
  
  
  // State - Track scroll progress (0 to 1)
  
  // useState returns an array: [currentValue, functionToUpdateIt]
  // destructure it into: scrollProgress (the value) and setScrollProgress (the updater)
  // Initial value is 0 no scroll yet
  const [scrollProgress, setScrollProgress] = useState(0)
  
  // ref for the container element (to measure its position)
  const containerRef = useRef(null)
  
  // Scroll reveal for the section header
  const headerRef = useScrollReveal()

  
  // useEffect - Track scrolling
  
  
  useEffect(() => {
    
    // This function calculates how far we have scrolled through the card section
    const handleScroll = () => {
      // If container doesn't exist, stop 
      if (!containerRef.current) return
      
      // rect.top = distance from top of viewport to top of element
      // rect.bottom = distance from top of viewport to bottom of element
      const rect = containerRef.current.getBoundingClientRect()
      
      const windowHeight = window.innerHeight  // Height of the browser window
      const containerHeight = containerRef.current.offsetHeight  // Height of our container

      
      // Calculate the scroll progress (0 to 1)
      
      // 
      // We want progress to be:
      // 0 when the container first enters the viewport (top of container at bottom of screen)
      // 1 when the container has scrolled completely through (bottom of container at top of screen)
      
      const start = windowHeight      // When container top is at viewport bottom
      const end = -containerHeight    // When container bottom is at viewport top
      const current = rect.top        // Current position of container top
      
      // calculate progress as a percentage (0 to 1)
      // Math.max(0, ...) ensures it doesn't go below 0
      // Math.min(1, ...) ensures it doesn't go above 1
      const progress = Math.max(0, Math.min(1, (start - current) / (start - end)))
      
      // Update the state with the new progress
      // this triggers a re-render, updating the card positions
      setScrollProgress(progress)
    }

    // Add scroll listener
    window.addEventListener('scroll', handleScroll)
    
    // Run once immediately 
    handleScroll()
    
    // cleanup
    return () => window.removeEventListener('scroll', handleScroll)
    
  }, []) // Empty array = run once on mount

  
  // the function calculate card styles based on scroll
  
  
  const getCardStyle = (index) => {
    const cardCount = cardsData.length  // Total number of cards (3)
    
    // how much scroll space each card gets
    // If progress = 0.5 and ther are 3 cards, we're at card 1.5 between card 1 and 2
    const cardProgress = scrollProgress * cardCount
    
    // Which card is currently on top
    // math.floor rounds down: 1.5 becomes 1
    // math.min ensures  don't go past the last card
    const activeIndex = Math.min(Math.floor(cardProgress), cardCount - 1)

    // default values
    let translateY = 0    // Vertical position
    
    let opacity = 1       // Visibility
    let scale = 1         // Size
    let zIndex = cardCount - index  // Stacking order (higher = on top)

    
    // DETERMINE CARD STATE
    
    
    if (index < activeIndex) {
      
      // CARD HAS BEEN SCROLLED PAST
    
      // These cards should move up and fade out
      const pastProgress = cardProgress - index  // How far past this card 
      
      translateY = -pastProgress * 100  // Move up (negative Y)
      opacity = Math.max(0, 1 - pastProgress * 0.6)  // Fade out
      scale = Math.max(0.9, 1 - pastProgress * 0.05)  // Shrink slightly
      
    } else if (index === activeIndex) {
      
      // active card
      
      // This card is on top, moves slightly as we scroll
      const currentProgress = cardProgress - index
      
      translateY = currentProgress * -40  // Move up a bit as we scroll
      
    } else {
      
      // waiting cards
      
      // These cards stay in their original position
      // default values translateY=0, opacity=1, scale=1 are already set
    }

    // return the css styles as an object
    // react apply these as inline styles
    return {
      // Combine rotation from data with dynamic transform
      transform: `rotate(${cardsData[index].rotation}deg) translateY(${translateY}px) scale(${scale})`,
      opacity,
      zIndex
    }
  }

  
  // RENDER
  
  
  return (
    <section className="cardstack">
      
      {/* section header with scroll reveal */}
      <div ref={headerRef} className="cardstack-header reveal">
        <span className="cardstack-label">Curated Experiences</span>
        <h2 className="cardstack-title">Moments of Joy</h2>
      </div>
      
      {/* 
        container that creates scroll space
        height: 300vh div is 3x the screen height
        gives plenty of scroll distance to animate through
        ref={containerRef} = need to measure this element's position
      */}
      <div ref={containerRef} className="cardstack-container">
        
        {/* 
          sticky container - stays in place while scrolling
          position: sticky in css keep this element fixed on screen
          while its parent scrolls through
        */}
        <div className="cardstack-cards">
          
          {/* loop through cards and render each one */}
          {cardsData.map((card, index) => (
            <div 
              key={card.id} 
              className="card"
              style={getCardStyle(index)}  // aply dynamic styles based on scroll
            >
              <div className="card-image">
                <img src={card.image} alt={card.alt} />
              </div>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.desc}</p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  )
}

export default CardStack