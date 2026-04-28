// zigzag component alternating image/text grid


import useScrollReveal from '../hooks/useScrollReveal'

const zigzagData = [
  {
    id: crypto.randomUUID(),  // Unique identifier (needed for React's .map() key prop)
    image: '/images/grid-1.jpg',  // Path to the image
    alt: 'Dried botanical arrangement in ceramic vase',  // Accessibility text
    label: 'Natural Materials',  // Small uppercase label
    title: 'Rooted in Nature',   // Big heading
    desc: "We draw inspiration from the earth's palette...",  // Description text
    reverse: false  // false = image on left, text on right
  },
  {
    id: crypto.randomUUID(),
    image: '/images/grid-2.jpg',
    alt: 'Artisan bread with olive oil on wooden board',
    label: 'Handmade Quality',
    title: 'Artisan Craft',
    desc: 'Every piece tells a story of craftsmanship and care...',
    reverse: true  // true = image on right, text on left (flipped!)
  },
  {
    id: crypto.randomUUID(),
    image: '/images/grid-3.jpg',
    alt: 'Winding cobblestone street in Mediterranean village',
    label: 'Travel Stories',
    title: 'Wander & Wonder',
    desc: "From Mediterranean coastlines to quiet mountain villages...",
    reverse: false
  },
  {
    id: crypto.randomUUID(),
    image: '/images/grid-4.jpg',
    alt: 'Handmade pottery and natural textiles arrangement',
    label: 'Mindful Living',
    title: 'Sanctuary Spaces',
    desc: 'Your home should be a reflection of peace and intention...',
    reverse: true
  }
]

// create a separate component for each item
// This keeps the code organized and reusable

function ZigZagItem({ item }) {
  // { item } = destructuring the props
  // receive the entire item object from the parent component
  
  // Create scroll reveal ref for the text content
  const contentRef = useScrollReveal()
  
  return (
    <div className={`zigzag-item ${item.reverse ? 'reverse' : ''}`}>
      {/* 
        className changes based on reverse prop
        If reverse=true, add "reverse" class (flips image/text order)
      */}
      
      {/* Image side */}
      <div className="zigzag-image-wrapper">
        <img src={item.image} alt={item.alt} className="zigzag-image" />
      </div>
      
      {/* Text side */}
      {/* ref={contentRef} = attach scroll reveal to this content */}
      <div ref={contentRef} className="zigzag-content reveal">
        <span className="zigzag-item-label">{item.label}</span>
        <h3 className="zigzag-item-title">{item.title}</h3>
        <p className="zigzag-item-desc">{item.desc}</p>
      </div>
      
    </div>
  )
}


// zigzag component


function ZigZag() {
  // Scroll reveal for the section header
  const headerRef = useScrollReveal()

  return (
    <section className="zigzag">
      
      {/* Section header with scroll reveal */}
      <div ref={headerRef} className="zigzag-header reveal">
        <span className="zigzag-label">Our Philosophy</span>
        <h2 className="zigzag-title">Embracing Simplicity</h2>
      </div>
      
      {/* 
        Grid container for all items
        use .map() to loop through the data array
        For each item in the array, render a ZigZagItem component
        key={item.id} is required by React for list rendering
        helps React track which items changed/added/removed
      */}
      <div className="zigzag-grid">
        {zigzagData.map(item => (
          <ZigZagItem key={item.id} item={item} />
        ))}
      </div>
      
    </section>
  )
}

export default ZigZag