import React, { Children, useEffect, useState } from 'react';
import { setInterval } from 'timers';
import './img_carousel.component.scss';

const Carousel = (props: any) => {
  const {children, show, currentIndex, setCurrentIndex} = props
  const [length, setLength] = useState(children.length)
  const [transitionEnabled, setTransitionEnabled] = useState(true)

  // Set the length to match current children from props
  useEffect(() => {
      setLength(children.length)
  }, [children, show])

  useEffect(() => {
    if (currentIndex === show || currentIndex === length) {
      setTransitionEnabled(true)
    }
  }, [currentIndex,show, length])

  useEffect(() => {
    setInterval(next, 3000);
  }, []);

  const next = () => {
    setCurrentIndex((prevState: any) => prevState + 1)
  }

  const handleTransitionEnd = () => {
    if (currentIndex <= 0) {
        setTransitionEnabled(false)
        setCurrentIndex(length)
    } else if (currentIndex >= length + show) {
        setTransitionEnabled(false)
        setCurrentIndex(show)
    }
  }

  return (
      <div className="carousel-container">
          <div className="carousel-wrapper">
              <div className="carousel-content-wrapper">
                  <div
                      className={`carousel-content show-${show}`}
                      style={{
                          transform: `translateX(-${currentIndex * (100 / show)}%)`,
                          transition: !transitionEnabled ? 'none' : undefined,
                      }}
                      onTransitionEnd={handleTransitionEnd}
                  >
                      {children}
                      {children}
                      {children}
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Carousel;