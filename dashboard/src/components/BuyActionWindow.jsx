import React, { useState, useContext } from "react";
import axios from "axios";

// Import the Context you created earlier
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [isSubmitting, setIsSubmitting] = useState(false); // New: Tracks loading state


  const { closeBuyWindow } = useContext(GeneralContext);

 
  const handleBuyClick = async () => {
    setIsSubmitting(true); // Disable the button while sending

    try {
   
      await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: Number(stockQuantity), // Ensure these are numbers, not strings
        price: Number(stockPrice),
        mode: "BUY",
        

      },
      {withCredentials: true}
    );

     
      closeBuyWindow();
    } catch (error) {
      // error gets handled here
      console.error("Order failed to submit:", error);
      alert("Failed to place order. Please try again.");
    } finally {
      setIsSubmitting(false); // Re-enable the button
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              min="0"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
  
          <button 
            className="btn btn-blue" 
            onClick={handleBuyClick}
            disabled={isSubmitting} // Prevents double-clicking the buy button
          >
            {isSubmitting ? "Buying..." : "Buy"}
          </button>
          
          <button 
            className="btn btn-grey" 
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;