import React from "react";
import "./RightSection.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const RightSection = ({
  imageUrl,
  productName,
  productDesign,
  productDescription,
  linkName,
  linkUrl,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <>
      <div className="container p-5 my-5 ">
        <div className="row ">
          <div className="col-6 textsect">
            <h3>{productName}</h3>
            <p>{productDescription}</p>
            <div className="py-2 d-flex justify-content-between w-50">
              <a href=''>
                {linkName}
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
          <div className="col-6 mainImg">
            <img src={imageUrl} alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSection;
