import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { VerticalChart } from "./VerticalChart";

const Holdings = () => {
  const [holdings, setHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3002/holdings", { withCredentials: true })
      .then(({ data }) => {
        setHoldings(Array.isArray(data) ? data : []);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (holdings.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You don't have any holdings yet</p>
          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  const totalInvestment = holdings.reduce(
    (sum, stock) => sum + Number(stock.avg || 0) * Number(stock.qty || 0),
    0
  );
  const totalCurrent = holdings.reduce(
    (sum, stock) => sum + Number(stock.price || 0) * Number(stock.qty || 0),
    0
  );
  const totalPnL = totalCurrent - totalInvestment;
  const pnlPercent =
    totalInvestment === 0 ? 0 : (totalPnL / totalInvestment) * 100;





    const labels = holdings.map((subarray) => subarray["name"]);


     const data = {
      labels,
      datasets: [
        {
          label: 'Stock Name',
          data: holdings.map((stock) => stock.price),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };


  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          {holdings.map((stock) => {
            const qty = Number(stock.qty || 0);
            const avg = Number(stock.avg || 0);
            const price = Number(stock.price || 0);
            const curValue = price * qty;
            const pnl = curValue - avg * qty;
            const isProfit = pnl >= 0;
            const profClass = isProfit ? "profit" : "loss";

            return (
              <tr key={stock._id}>
                <td>{stock.name}</td>
                <td>{qty}</td>
                <td>{avg.toFixed(2)}</td>
                <td>{price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td className={profClass}>{pnl.toFixed(2)}</td>
                <td className={profClass}>{stock.net ?? "-"}</td>
                <td className={profClass}>{stock.day ?? "-"}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            {totalInvestment.toFixed(2)}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {totalCurrent.toFixed(2)}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>
            {totalPnL.toFixed(2)} ({pnlPercent >= 0 ? "+" : ""}
            {pnlPercent.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalChart data={ data  } />
    </>
  );
};

export default Holdings;
