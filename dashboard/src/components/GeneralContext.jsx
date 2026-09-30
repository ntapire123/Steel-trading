import React, { useState } from 'react';
import BuyActionWindow from './BuyActionWindow';

// 1. The Blueprint (The Intercom System Rules)
// This lives OUTSIDE so it can be exported and imported anywhere.
const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
});

// 2. The Building (The Host at the table)
// This is your actual React component that manages the memory (state).
export const GeneralContextProvider = (props) => {
  // State variables correctly scoped inside the component
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUid, setSelectedStockUid] = useState("");

  // Functions that update the state
  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUid(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUid("");
  };

  return (
    // 3. The Portal
    // Notice how 'value' is strictly inside the opening tag!
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow, 
      }}
    >
      {/* Renders the rest of your app (the guests at the table) */}
      {props.children} 
      
      {/* Renders the popup if the state is true */}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUid} />}
    </GeneralContext.Provider>
  );
};

// 4. Exporting the Blueprint
// This allows other files to use: useContext(GeneralContext)
export default GeneralContext;