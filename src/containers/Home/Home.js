import React from 'react'
import Button from "../../components/Button/Button";
import './Home.css'
import podcastIcon from '../../assets/podcasts_FILL0_wght400_GRAD0_opsz24.png'

function Home() {
  return (
      <main>
        <div className="app__home">
          <div className="app__home-hero-section">
            <div className="app__home-hero-content">
              <div className="app__home-hero-title">Come grow with us!</div>
              <span>208 Jefferson Pk. | Sundays @ 11 am</span>
              {/*<span>We are a loving church excited about growing in the Lord.</span>*/}
              {/*<span>Help us make a difference in our community!</span>*/}
              {/*<button className="app__home-button"><img src={podcastIcon}/><span>Live Stream</span></button>*/}
              <Button
                  type="submit"
                  text="Live Stream"
                  icon="fa-podcast"
              />
            </div>
          </div>
        </div>
      </main>
  )
}

export default Home
