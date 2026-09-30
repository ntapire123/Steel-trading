import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Pricing.css";

const Pricing = () => {
  return (
    <>
      <div className="container mt-5 mb-5 h-auto w-100">
        <div className="row flex mb-6">
          <div className="rightSection col-6 h-100">
            <div className="container w-100 h-100">
              <div className="imageHolder w-100 h-100">
                <img src="/assets/index-education.svg" className="varImg" />
              </div>
            </div>
          </div>
          <div className="leftSection col-6 ">
            <div className="sectionHolder">
              <h2 className="pHead ">Free and open market education</h2>

              <p className="pText">
                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
                crores of equity investments, making us India’s largest broker;
                contributing to 15% of daily retail exchange volumes in India.
              </p>
              <button className="linkBtn">
                Varsity
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
              <p className="pText mb-3">
                Not just an app, but a whole varImg. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
              <button className="linkBtn">
                TradingQNA
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
        <div className="signupContainer d-flex flex-column justify-content-center my-8 h-auto">
          <h1 className="text-center my-2 ">Invest in the steel </h1>
          <p className="text-center my-2 mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            tenetur.
          </p>
          <button
            type="button "
            className="btn btn-primary w-25 btn-small mt-2 mb-2 align-self-center px-1 py-2"
            >
            {" "}
            Sign up For Free
          </button>
        </div>
            </div>
    </>
  );
};

export default Pricing;
