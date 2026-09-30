import React from 'react'
import "./Hero.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
    return (
    <div className="container ">
      <div className="text-center mt-5">
        <h2>Steel Trading Products</h2>
        <h3 className="text-muted mt-3 fs-4">
          Sleek, modern and intuitive trading platforms
        </h3>
        <p className="mt-3">
          Check out our" "
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings{" "}
              <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero