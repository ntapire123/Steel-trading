import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Award.css";

const Award = () => {
  return (
    <>
      <div className="container mt-5 mb-5 h-100">
        <div className="row flex">
          <div className="leftSection col-5 ">
            <h2 className="mb-3 pHead">Trust with confidence </h2>

            <div className="sectionHolder">

            <h3 className="pHead fw-normal">Customer-first always</h3>

            <p className="pText">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
            </div>
            <div className="sectionHolder">
            <h3  className="pHead ">No gimmicks, spam</h3>
            <p className="pText mb-3">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like. Our
              philosophies.
            </p>

            </div>
            <div className="sectionHolder">
              
            <h3 className=" pHead ">The Zerodha universe</h3>
            <p className="pText mb-3">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
            </div>
         <div className="sectionHolder">
              <h3 className="pHead ">Do better with money</h3>
              <p className="pText mb-3">
                With initiatives like Nudge and Kill Switch, we don't just
                facilitate transactions, but actively help you do better with
                your money.
              </p>

         </div>
          </div>
          <div className="rightSection col-7 h-100">
            <div className="container w-100 h-100">
              <div className="imageHolder w-100 h-100">
                <img src="/assets/ecosystem.png" className="ecosys"/>
              </div>
              <div className="btnParent">
                <button className="linkBtn">
                  Explore Our Product
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>

                <button className="linkBtn">
                  Try Kite Demo
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
          <div className="pressHolder">
            <img src="/assets/pressLogos.png "  className="press"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Award;
