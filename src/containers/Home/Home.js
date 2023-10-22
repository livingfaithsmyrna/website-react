import React from 'react'
import Button from "../../components/Button/Button";
import './Home.css'

function Home() {

  const navigateToLive = () => {
    window.open('https://www.facebook.com/livingfaithsmyrna', '_blank');
  }

  return (
      <main>
        <div className="app__home">
          <div className="app__home-hero-section">
            <div className="app__home-hero-content">
              <h1 className="app__home-hero-title">Come grow with us!</h1>
              <span className="app__home-hero-caption">208 Jefferson Pk. | Sundays @ 11 am</span>
              <div className="app__home-live-stream-button">
                <Button theme="facebook" text="Watch Live" icon="external-link-alt" onClick={navigateToLive} />
              </div>
              <span className="app__home-hero-tag">We are a small church excited about growing in the Lord</span>
              <span>Come help us make a difference in our community</span>
            </div>
          </div>
        </div>
      </main>
  )
}

export default Home
