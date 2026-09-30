import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">STEEL TRADING</div>
          <p className="footer-description">
            A modern discount broking platform built for retail investors and
            traders. Transparent pricing, smarter technology, and simplified
            market access.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="X" className="social-link">
              X
            </a>
            <a href="#" aria-label="Facebook" className="social-link">
              F
            </a>
            <a href="#" aria-label="Instagram" className="social-link">
              I
            </a>
            <a href="#" aria-label="LinkedIn" className="social-link">
              in
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h5 className="footer-subtitle">Account</h5>
          <ul className="footer-links">
            <li>
              <a href="#">Open demat account</a>
            </li>
            <li>
              <a href="#">Minor demat account</a>
            </li>
            <li>
              <a href="#">NRI demat account</a>
            </li>
            <li>
              <a href="#">HUF demat account</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h5 className="footer-subtitle">Support</h5>
          <ul className="footer-links">
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Support portal</a>
            </li>
            <li>
              <a href="#">How to file a complaint?</a>
            </li>
            <li>
              <a href="#">Status of your complaints</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h5 className="footer-subtitle">Company</h5>
          <ul className="footer-links">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Philosophy</a>
            </li>
            <li>
              <a href="#">Press & media</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h5 className="footer-subtitle">Quick links</h5>
          <ul className="footer-links">
            <li>
              <a href="#">Upcoming IPOs</a>
            </li>
            <li>
              <a href="#">Brokerage charges</a>
            </li>
            <li>
              <a href="#">Market holidays</a>
            </li>
            <li>
              <a href="#">Calculators</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-disclaimer">
          Investments in securities market are subject to market risks; read all
          related documents carefully before investing.
        </p>
        <div className="footer-legal-links">
          <a href="#">Terms & conditions</a>
          <a href="#">Policies & procedures</a>
          <a href="#">Privacy policy</a>
          <a href="#">Disclosure</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
