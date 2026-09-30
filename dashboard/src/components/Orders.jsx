import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3002/orders", { withCredentials: true })
      .then(({ data }) => {
        setOrders(Array.isArray(data) ? data : []);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (orders.length === 0) {
    return <h1>You haven't placed any orders today</h1>;
  }
  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
      <div className="orders-list">
        {orders.map((order) => (
          <div key={order._id} className="order-item">
            <p>{order.name}</p>
            <p>{order.qty}</p>
            <p>{order.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
