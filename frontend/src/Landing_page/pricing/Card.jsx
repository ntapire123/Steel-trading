import React from "react";

const Card = ({
    imgSrc,
    title,
    description
}) => {
  return (
    <>
      <div className="col-4">
        <img src= {imgSrc} alt="" srcset="" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Card;
