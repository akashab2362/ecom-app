import React from "react";
import logo_light from "./Logo/logo-light-navbar.png";
import { Heart, ShoppingBag, Search } from "lucide-react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  
  return (
    <nav>
      <div className="left">
        <Link to="/">
          <img src={logo_light} alt="Logo" />
        </Link>
      </div>

      <div className="right">
        <div className="guest-header">
          <ul className="login-help-nav">
            <li>
              <Link to="/login">
                <span className="loginCAAT">Sign In</span>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <span className="loginCAAT">Join TAC</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="customercare">Customer Care</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="menu-list">
          <ul>
            <li>
              <Link to="/">
                <span className="tabs men">MEN</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="tabs women">WOMEN</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="tabs kids">KIDS</span>
              </Link>
            </li>
          </ul>
          <span className="submit-btn">
            <input
              className="search-bar"
              type="text"
              autoComplete="on"
              placeholder="Search TAC"
            />
            <Search color="#000" strokeWidth={1.5} size={18} />
          </span>
          <Heart color="#e22400" strokeWidth={1.5} />
          <Link to="/">
            <ShoppingBag color="#000" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
