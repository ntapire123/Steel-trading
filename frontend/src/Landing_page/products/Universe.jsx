import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Universe.css";
import Card from "./Card";

const Universe = ({
  imageUrl,
  productName,
  productDesign,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <>
      <div className="slogan p-5 my-5 ">
        <p className="slogan p-5 my-5 fs-4">
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </p>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-12 slogan">
            <h3>The Zerodha Universe</h3>
            <p >
              Extend your trading and investment experience even further with
              our partner platforms
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 cardHolder">
            <Card
              imageSrc="/assets/zerodhaFundhouse.png"
              imageText="Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.
"
            />
            <Card
              imageSrc="/assets/sensibullLogo.svg"
              imageText="Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
"
            />
            <Card
              imageSrc="/assets/tijori.svg"
              imageText="Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more."
            />
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 cardHolder">
            
            <Card
              imageSrc="/assets/streakLogo.png"
              imageText="Systematic trading platform
that allows you to create and backtest
strategies without coding."
            />
            <Card
              imageSrc="/assets/smallcaseLogo.png"
              imageText="Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs."
            />
            <Card
              imageSrc="assets/dittoLogo.png"
              imageText="Personalized advice on life
and health insurance. No spam
and no mis-selling.
Sign up for free
"
            />
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
};

export default Universe;
