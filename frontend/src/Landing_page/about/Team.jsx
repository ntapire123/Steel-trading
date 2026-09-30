import React from 'react'
import './Team.css'

const Team = () => {
  return (
    <section className="about-team">
      <div className="about-team__inner">
        <div className="about-team__header">
          <h3 className="eyebrow">People</h3>
          <h2>Our leadership is built to keep markets simpler.</h2>
        </div>

        <div className="team-card">
          <div className="team-card__photo">
                <img src="/assets/nithinKamath.jpg" alt="Nithin Kamath" className='Nikhil' />
          </div>
          <div className="team-card__content">
            <p className="team-card__name">Nithin Kamath</p>
            <p className="team-card__role">Founder, CEO</p>
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade-long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC). Playing
              basketball is his zen.
            </p>
            <div className="team-card__links">
              <a href="#" className="team-link">Homepage</a>
              <a href="#" className="team-link">TradingQnA</a>
              <a href="#" className="team-link">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team