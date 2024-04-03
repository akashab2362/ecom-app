import React, { useEffect } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { logout } from "../store/userSlice";
import { useSelector } from "react-redux";
import { clearError } from "../store/userSlice";
const UserOptions = ({ user }) => {
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();
  const { error, isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
  }, [dispatch, error, alert, navigate, isAuthenticated]);
  const handleLogout = () => {
    dispatch(logout())
      .then(() => {
        alert.success("Logout Successfully");
      })
      .catch((error) => {
        // Handle error
      });
  };
  return (
    <>
      <div className="user-header">
        {" "}
        {/* Render profile link when authenticated */}
        <ul className="login-help-nav">
          {user.role === "admin" && (
            <li>
              <Link to="/dashboard">
                <span className="loginCAAT">Dashboard</span>
              </Link>
            </li>
          )}
          <li>
            <Link to="/orders">
              <span className="loginCAAT">Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/account">
              <span className="loginCAAT">Your Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="loginCAAT" onClick={handleLogout}>
                Logout
              </span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="customercare">Customer Care</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserOptions;
