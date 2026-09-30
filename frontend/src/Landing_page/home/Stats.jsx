import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Stats.css";

const Stats = () => {
  return (
    <>
      <div className="container mt-5 mb-5 h-100">
        <div className="row flex">
          <div className="leftSection col-6 ">
            <div className="sectionHolder">
              <h3 className="pHead fw-normal">Unbeatable pricing</h3>

              <p className="pText">
                We pioneered the concept of discount broking and price
                transparency in India. Flat fees and no hidden charges.
                <br />
              <button className="linkBtn">
                See Pricing
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
              </p>
            </div>
          </div>
          <div className="rightSection col-6 ">
            <div className="container w-100 h-100 cardHolder">
              <div className=" card ">
                <img src="/assets/pricingEquity.svg" className="priceImg" />
                <p className="smallText ">Free account opening</p>
              </div>
              <div className="card">
                <img src="/assets/pricingEquity.svg" className="priceImg" />
                <p className="smallText">Free equity delivery and direct mutual funds</p>
              </div>
              <div className="card ">
                <img src="/assets/other-trades.svg" className="priceImg" />
                <p className="smallText">Intraday and F&O</p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
