import React from 'react'
import Brokerage from './Brokerage.jsx'
import PricingPage from './PricingPage.jsx'
import Card from './Card.jsx'
import "./Hero.css"


const Hero = () => {
  return (
    <>
    <div className="container">
      <div className="row py-5 ">
        <div className="col-12 header ">
          <h3>Charges</h3>
          <h3 className='text-muted'>List of all charges</h3>
        </div>
      </div>
      
      <div className="row mt-5">
        <Card 
        className="col-4"
        imgSrc= "/assets/pricingMF.svg"
        title= "Free equity delivery"
        description= "All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage. "
        />
        <Card 
        className="col-4"
        imgSrc= "assets/other-trades.svg"
        title= "Intraday and F&O trades"
        description= "Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades. "
        />
        <Card 
        className="col-4"
        imgSrc= "/assets/pricingMF.svg"
        title= "Free direct MF"
        description= "All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges. "
        />
        
      </div>
    </div>

    </>
  )
}

export default Hero