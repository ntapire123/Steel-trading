import React from 'react'
import "./Card.css"

const Card = ({imageSrc , imageText}) => {
  return (
      <div className='card'>
              <img src={imageSrc} alt="" srcset="" />
              <p>{imageText}</p>
     </div>
  )
}

export default Card