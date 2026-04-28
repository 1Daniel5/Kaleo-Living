// Import each section component

import Hero from './components/Hero'           // The big image at the top
import Narrative from './components/Narrative' // The text with spinning stars
import ZigZag from './components/ZigZag'       // The alternating image/text grid
import Breath from './components/Breath'       // The "Breathe" section
import CardStack from './components/CardStack' // The stacking cards effect
import Footer from './components/Footer'       // The footer at the bottom

// The app function returns what we see on screen

// This is a "functional component"
// It's like an architect drawing the blueprint of our page
function App() {
  return (
    // className="app" applies CSS styles to this container
    // I wrap everything in a div so that I can style the whole page
    <div className="app">
      {/* 
        Each of these is a component I imported above.
        They render in order from top to bottom.
        It's like stacking Lego blocks!
      */}
      <Hero />       {/* First block: Big hero image */}
      <Narrative />  {/* Second block: Text section */}
      <ZigZag />     {/* Third block: Image grid */}
      <Breath />     {/* Fourth block: Breathe image */}
      <CardStack />  {/* Fifth block: Stacking cards */}
      <Footer />     {/* Last block: Footer */}
    </div>
  )
}

// this is a default export component
// (main.jsx imports it above)
export default App