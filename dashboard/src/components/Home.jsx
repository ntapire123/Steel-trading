import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [username, setUsername] = useState("");
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    axios
      .post("http://localhost:3002/verifyuser", {}, { withCredentials: true })
      .then(({ data }) => {
        if (data.status) {
          setUsername(data.user);
          setChecking(false);
        } else {
          window.location.href = "http://localhost:5173/login";
        }
      })
      .catch(() => {
        window.location.href = "http://localhost:5173/login";
      });
  }, []);

  if (checking) {
    return <h1 style={{ padding: "2rem" }}>Checking login...</h1>;
  }

  return (
    <>
      <TopBar username={  username } />
      <Dashboard />
    </>
  );
};

export default Home;