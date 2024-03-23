import React from 'react'
import '../styles/ImageSlider.css'
export default function ImageSlider() {
  return (
    <div>
      <body>
        <div className="container">
          <div className="slider">
            <div className="slide slide1">
              <div className="caption">
                <h2>Welcome to <span className="name">TravelGo</span></h2>
                <p>The world is huge and we assist in helping you find your happy place in it.</p>
                <button className="animated-button">
                  <span> Explore Now</span>
                </button>
              </div>
            </div>
            <div className="slide slide2">
              <div className="caption">
                <h2>Relax!!!</h2>
                <p>Sometimes the most productive thing you can do is relax.</p>
                <p>~Mark Black</p>
              </div>
            </div>
            <div className="slide slide3">
              <div className="caption">
                <h2>Take A Break!</h2>
                <p>Put your problems on pause. You deserve a break.</p>
                <p>~Akiroq Brost</p>
              </div>
            </div>
            <div className="slide slide4">
              <div className="caption">
                <h2>Let Go!</h2>
                <p>Worry never robs tomorrow of its sorrow, it only saps today of its joy.</p>
                <p>~Leo Buscaglia</p>
              </div>
            </div>
            <div className="slide slide1">
              <div className="caption">
                <h2>Welcome to <span>TravelGo</span></h2>
                <p>The world is huge and we assist in helping you find your happy place in it.</p>
              </div>
            </div>
          </div>
        </div>
    </body>
    </div>
  )
}
