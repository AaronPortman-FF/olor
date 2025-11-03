import { useState } from 'react'
import './Photos.css'

function Photos() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const dogImages = [
    '/assets/dogs/dog1.png',
    '/assets/dogs/dog2.png',
    '/assets/dogs/dog3.png',
    '/assets/dogs/dog4.png',
    '/assets/dogs/dog5.png',
    '/assets/dogs/dog6.png',
    '/assets/dogs/dog7.png'
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === dogImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dogImages.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="photos">
      <div className="photos-container">
        <h1>Our Furry Friends</h1>
        <p className="photos-subtitle">Dogs we love to see at Olor Coffee Bar</p>

        <div className="carousel">
          <div className="carousel-image-container">
            <img
              src={dogImages[currentIndex]}
              alt={`Dog ${currentIndex + 1}`}
              className="carousel-image"
            />
          </div>
        </div>

        <div className="carousel-controls">
          <button className="carousel-button prev" onClick={prevSlide} aria-label="Previous image">
            ‹
          </button>

          <div className="carousel-dots">
            {dogImages.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          <button className="carousel-button next" onClick={nextSlide} aria-label="Next image">
            ›
          </button>
        </div>
      </div>
    </div>
  )
}

export default Photos
