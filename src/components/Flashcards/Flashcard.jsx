import React, { useState, useEffect, useRef } from 'react'

// Flashcard component that shows a question on the front 
// and an answer on the back, with flip functionality.

export default function Flashcard({ flashcard }) {
    // State to track if card is flipped
  const [flip, setFlip] = useState(false)

    // State to store card height (so both sides match height)
  const [height, setHeight] = useState('initial')

    // Refs for measuring height of front and back elements

  const frontEl = useRef()
  const backEl = useRef()


  // Function to set max height between front & back

  function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height
    const backHeight = backEl.current.getBoundingClientRect().height

        // Ensure card has enough height for both sides (min 100px)
    setHeight(Math.max(frontHeight, backHeight, 100))
  }


  // Recalculate height whenever question/answer/options change

  useEffect(setMaxHeight, [flashcard.question, flashcard.answer, flashcard.options])

    // Recalculate height whenever window resizes
  useEffect(() => {
    window.addEventListener('resize', setMaxHeight)
    return () => window.removeEventListener('resize', setMaxHeight)
  }, [])

  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      style={{ height: height }}
      onClick={() => setFlip(!flip)}
    >
      <div className="front" ref={frontEl}>
        {flashcard.question}
        <div className="flashcard-options">
          {flashcard.options.map(option => {
            return <div className="flashcard-option" key={option}>{option}</div>
          })}
        </div>
      </div>
      <div className="back" ref={backEl}>{flashcard.answer}</div>
    </div>
  )
}
