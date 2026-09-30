import React, { useState } from 'react'
import './support.css'

const Hero = () => {
  const accountOpening = [
    'Resident individual',
    'Minor',
    'Non Resident Indian (NRI)',
    'Company, Partnership, HUF and LLP',
    'Glossary',
  ]

  const yourZerodhaAccount = [
    'Login credentials',
    'Your Profile',
    'Transfer and conversion of shares',
    'Nomination',
    'Account status and modification',
  ]

  const kiteItems = [
    'Product and order types',
    'Corporate actions',
    'Kite Web and Mobile',
    'Charges',
    'Margins',
    'Trading FAQs',
  ]

  const funds = [
    'Fund withdrawal',
    'Adding funds',
    'Adding bank accounts',
    'Charges',
  ]

  const consoleItems = [
    'IPO',
    'Portfolio',
    'Funds statement',
    'Profile',
    'Reports',
  ]

  const coinItems = [
    'Understanding mutual funds and Coin',
    'About Coin',
    'Buying and Selling Mutual Funds',
    'Funds Transfer and settlements',
  ]

  return (
    <div className="support-container">
      <div className="row g-4">
        {/* Left Column - Collapsible Cards */}
        <div className="col-12 col-md-8">
          <CollapsibleCard title="Account Opening" items={accountOpening} defaultOpen={true} />
          <CollapsibleCard title="Your Zerodha Account" items={yourZerodhaAccount} />
          <CollapsibleCard title="Kite" items={kiteItems} />
          <CollapsibleCard title="Funds" items={funds} />
          <CollapsibleCard title="Console" items={consoleItems} />
          <CollapsibleCard title="Coin" items={coinItems} />
        </div>

        {/* Right Column - Notice & Quick Links */}
        <div className="col-12 col-md-4">
          {/* Beige Notice Box */}
          <div className="notice-box">
            <ul className="support-list">
              <li>
                <a href="#">Latest Intraday leverages and Square-off timings</a>
              </li>
              <li>
                <a href="#">Rights Entitlements listing in June 2026</a>
              </li>
            </ul>
          </div>

          {/* Quick Links Card */}
          <div className="quick-links-card">
            <div className="quick-links-header">Quick links</div>
            <ul className="quick-links-list">
              <li className="quick-links-item">
                <a href="#">1. Track account opening</a>
              </li>
              <li className="quick-links-item">
                <a href="#">2. Track segment activation</a>
              </li>
              <li className="quick-links-item">
                <a href="#">3. Intraday margins</a>
              </li>
              <li className="quick-links-item">
                <a href="#">4. Kite user manual</a>
              </li>
              <li className="quick-links-item">
                <a href="#">5. Learn how to create a ticket</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

const getIcon = (title) => {
  switch (title) {
    case 'Account Opening':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      )
    case 'Your Zerodha Account':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    case 'Kite':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      )
    case 'Funds':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fontSize="11" fontWeight="bold" fill="currentColor">₹</text>
        </svg>
      )
    case 'Console':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      )
    case 'Coin':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      )
  }
}

export const CollapsibleCard = ({ title, items = [], defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)
  const toggleOpen = () => setOpen((prev) => !prev)
  const collapseId = title.replace(/\s+/g, '-').toLowerCase() + '-collapse'

  return (
    <div className="support-card">
      <button
        type="button"
        className="support-card-header"
        onClick={toggleOpen}
        aria-expanded={open}
        aria-controls={collapseId}
      >
        <div className="icon-wrapper">
          {getIcon(title)}
        </div>
        <span className="support-card-title">{title}</span>
        <span className="support-card-chevron">
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          )}
        </span>
      </button>

      <div id={collapseId} className={`collapse ${open ? 'show' : ''}`}>
        <div className="support-card-body">
          <ul className="support-list">
            {items.map((item, index) => (
              <li key={index}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
