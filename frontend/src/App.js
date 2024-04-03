import "./App.css";
import Home from "./Components/Home/Home.js";
import store from "./Components/store/store.js";
import { loadUser } from "./Components/store/userSlice.js";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout.js";
import Login from "./Components/Authentication/Login.js";
import Register from "./Components/Authentication/Register.js";
import MenProducts from "./Components/Product/MenProducts.js";
import WomenProducts from "./Components/Product/WomenProducts.js";
import KidsProduct from "./Components/Product/KidsProducts.js";
import ProductDetails from "./Components/Product/ProductDetails.js";
import Account from "./Components/User/Account.js";
import UpdateProfile from "./Components/User/UpdateProfile.js";
import UpdatePassword from './Components/User/UpdatePassword.js'
import ForgotPassword from './Components/User/ForgotPassword.js'
import ResetPassword from './Components/User/ResetPassword.js'
import { useSelector } from "react-redux";
function App() {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<MenProducts />} />
          {/* <Route path="/women" element={<WomenProducts />} />
          <Route path="/kids" element={<KidsProduct />} /> */}
          <Route path="/products/:keyword" element={<MenProducts />} />
          <Route
            path="/account"
            element={!loading && isAuthenticated ? <Account /> : <Login />}
          />
          {/* <Route path="/account" element={<Account />} /> */}
          {/* <Route
            path="/me/update"
            element={!loading && isAuthenticated ? <UpdateProfile /> : <Login />}
          /> */}
          <Route path="/me/update" element={<UpdateProfile />} />
          <Route path="/password/update" element={<UpdatePassword />} />
          <Route path="/password/forgot" element={<ForgotPassword />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />

          <Route path="/product/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
