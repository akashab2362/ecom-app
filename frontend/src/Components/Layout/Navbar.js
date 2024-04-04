import React, { useState } from "react";
import logo_light from "../../assets/logo-light-navbar.png";
import { Heart, ShoppingBag, Search } from "lucide-react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserOptions from "./UserOptions.js";

function Navbar() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`); // Using navigate instead of history.push
    } else {
      navigate("/products"); // Using navigate instead of history.push
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchSubmitHandler(e);
    }
  };
  return (
    <nav>
      <div className="left">
        <Link to="/">
          <img src={logo_light} alt="Logo" />
        </Link>
      </div>

      <div className="right">
        {/* Check if user is authenticated */}
        {isAuthenticated ? (
          <UserOptions user={user} />
        ) : (
          <div className="guest-header">
            {" "}
            {/* Render login and join links when not authenticated */}
            <ul className="login-help-nav">
              <li>
                <Link to="/login">
                  <span className="loginCAAT">Sign In</span>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <span className="loginCAAT">Join Byte Bazaar</span>
                </Link>
              </li>
              <li>
                <Link to="/customer-care">
                  <span className="customercare">Customer Care</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
        <div className="menu-list">
          <ul>
            <li>
              <Link to="/products">
                <span className="tabs men">Products</span>
              </Link>
            </li>
            {/* <li>
              <Link to="/products">
                <span className="tabs women">WOMEN</span>
              </Link>
            </li>
            <li>
              <Link to="/products">
                <span className="tabs kids">KIDS</span>
              </Link>
            </li> */}
          </ul>
          <span className="submit-btn">
            <input
              className="search-bar"
              type="text"
              autoComplete="on"
              placeholder="Search"
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <Search className="cursor-pointer" color="#000" strokeWidth={1.5} size={18} onClick={searchSubmitHandler}/>
          </span>
          {/* <Heart color="#e22400" strokeWidth={1.5} /> */}
          <Link to="/cart">
            <ShoppingBag color="#000" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
