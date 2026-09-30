import React, { useState, useContext } from "react";

import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BarChartIcon from '@mui/icons-material/BarChart';
import { DoughnutChart } from "./DoughnutChart";
import GeneralContext from "./GeneralContext";

const labels = watchlist.map((stock) => stock.name);

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length}</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={`${stock.name}-${index}`} />
        ))}
      </ul>
      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;


const WatchListItem = ({ stock }) => {
  const [showWatchlistAction, setshowWatchlistAction] = useState(false);

  const hoverIn = () => {
    setshowWatchlistAction(true);
  };

  const hoverOut = () => {
    setshowWatchlistAction(false);
  };

  return (
      <li onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
       <div className="items">
         <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
          <div className="itemInfo">
            <span className="percent">
                {stock.percent}

            </span>
            {stock.isDown ? (<KeyboardArrowDownIcon/>) : (<KeyboardArrowUpIcon/>) }
               <span className="price">
                {stock.price}

            </span>
          </div>
        </div> 
      {showWatchlistAction && <WatchlistActions uid={stock.name} />}
      </li>
  );
};

const WatchlistActions = ({ uid }) => {
  const { openBuyWindow } = useContext(GeneralContext);
  return(
    <span className="actions">
         <span>
          {/* BUY BUTTON */}
         <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
          <button
            type="button"
            className="buy"
            onClick={(event) => {
              // 1. Stop the parent elements from knowing about this click
              event.stopPropagation();
              // 2. Safely open the portal
              openBuyWindow(uid);
            }}
          >
            Buy
          </button>
        </Tooltip>

         {/* SELL BUTTON */}
        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
          <button
            type="button"
            className="sell"
            onClick={(event) => {
              event.stopPropagation();
              // Note: Still opening the Buy window per the current tutorial stage!
              openBuyWindow(uid);
            }}
          >
            Sell
          </button>
        </Tooltip>
          <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
            <button className="chart">
              <BarChartIcon className="icons"/>
            </button>
          </Tooltip>  
          <Tooltip title="More (A)" placement="top" arrow TransitionComponent={Grow}>
            <button className="more">
              <MoreHorizIcon className="icons"/>
               </button>
          </Tooltip>
          
         </span>
    </span>
  )
}