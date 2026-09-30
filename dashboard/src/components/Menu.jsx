import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Menu = ({ username }) => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);



  const handleLogout = () => {
    axios.post("http://localhost:3002/logout", {}, { withCredentials: true })
    window.location.href = "http://localhost:5173/login";

  };  
  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  const menuItems = [
    { label: "Dashboard", path: "/" },
    { label: "Orders", path: "/orders" },
    { label: "Holdings", path: "/holdings" },
    { label: "Positions", path: "/positions" },
    { label: "Funds", path: "/funds" },
    { label: "Apps", path: "/apps" },
  ];



  return (
    <div className="menu-container">
      <div className="brand-mark" aria-label="Steel Trading">
        <img src="/logo.png" className="img-fluid rounded-top" alt="Steel Trading logo" style={{width:"20%"}} />
      </div>
      <div className="menus">
        <ul>
          {menuItems.map((item, index) => (
            <li key={item.label}>
              <Link to={item.path} onClick={() => handleMenuClick(index)}>
                <p className={selectedMenu === index ? "menu selected" : "menu"}>
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          
          <div className="avatar">ZU</div>
          {username ? username.slice(0, 2).toUpperCase() : "USER"}
          <p className="username">{username}</p>
        </div>
        {isProfileDropdownOpen ? (
          <div className="profile-dropdown">
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
        ) : null}
      </div>
    </div>
  );
};

export default Menu;
