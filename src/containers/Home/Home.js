import React from 'react'
import Button from "../../components/Button/Button";
import './Home.css'

function Home() {
  return (
      <main>
        <div className="app__home">
          <div className="app__home-hero-section">
            <div className="app__home-hero-content">
              <div className="app__home-hero-title">Come grow with us!</div>
              <span>208 Jefferson Pk. | Sundays @ 11 am</span>
              <div className="app__home-live-stream-button">
                <Button type="submit" text="Live Stream" icon="podcast" />
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}

export default Home
