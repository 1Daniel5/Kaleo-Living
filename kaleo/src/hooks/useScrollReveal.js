// This hook makes elements fade in when you scroll to them

// Import useEffect and useRef from React
// useEffect = run side effects like th event listeners
// useRef = create a reference to a DOM element like grabbing it with querySelector
import { useEffect, useRef } from 'react'

// options = optional settings we can pass in
function useScrollReveal(options = {}) {
  
  // Create a reference which will point to a DOM element
  // it's null because I haven't attached it to anything yet
  const ref = useRef(null)

  // useEffect runs when the component appears on scree
    
  useEffect(() => {
    // Get the actual DOM element from ref
    // ref.current is the real HTML element in the browser
    const element = ref.current
    
    // f the element doesn't exist, stop here
    if (!element) return

    // intersection observer is like the scroll watcher
    
    // This is a BROWSER api that watches when elements enter or leave the viewport
    
    const observer = new IntersectionObserver(
      // This function runs every time the element enters or leaves the viewport
      ([entry]) => {
        // entry.isIntersecting = true when the element is visible on screen
        if (entry.isIntersecting) {
          // Add the revealed css class to trigger the fade-in animation
          element.classList.add('revealed')
          
          // Stop watching this element (only want to animate it once)
          observer.unobserve(element)
        }
      },
      // Options for the observer
      {
        threshold: 0.1,        // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px', // Start 50px before the element is fully visible
        ...options              // Spread any custom options passed in
      }
    )

    // Start watching the element!
    observer.observe(element)

    // cleanup function runs when component unmounts or disappears

    // This prevents memory leaks by disconnecting the observer
    return () => observer.disconnect()
    
  // The empty array [] means this effect only runs once
  // If we put options inside an array, it would re-run whenever options change
  }, [options])

  // Return the ref so the component can attach it to an element
  return ref
}

// Export the hook so components can use it
export default useScrollReveal