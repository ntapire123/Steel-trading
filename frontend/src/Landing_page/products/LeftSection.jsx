import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./RightSection.css"

const LeftSection = ({
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
      <div className="container p-5 my-5">
        <div className="row">
          <div className="col-6 mainImg ">
            <img src={imageUrl} alt="" srcset="" />
          </div>
      
          <div className="col-6 textsect">
            <h3>{productName}</h3>
            <p>{productDescription}</p>
             <div className="py-2 d-flex justify-content-between w-50">
              <a href={tryDemo}>Try demo   <FontAwesomeIcon icon={faArrowRight} /></a>
              <a href={learnMore}>Learn more    <FontAwesomeIcon icon={faArrowRight} /></a>
            </div>
            <div className="py-2 d-flex justify-content-between w-50 linkHolder">
              <a href={googlePlay}>
                <img src="/assets/googlePlayBadge.svg" alt="" />
              </a>
              <a href={appStore} >
                <img src="assets\appstoreBadge.svg" alt="" />
              </a>
            </div>
            
          
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSection;
