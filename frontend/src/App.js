import "./App.css";
import Home from "./Components/Home/Home.js";
import store from "./Components/store/store.js";
import { loadUser } from "./Components/store/userSlice.js";
import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
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
import UpdatePassword from "./Components/User/UpdatePassword.js";
import ForgotPassword from "./Components/User/ForgotPassword.js";
import ResetPassword from "./Components/User/ResetPassword.js";
import ProtectedRoute from "./Components/Routes/ProtectedRoute.js";
import Cart from "./Components/Cart/Cart.js";
import Shipping from "./Components/Cart/Shipping.js";
import ConfirmOrder from "./Components/Cart/ConfirmOrder.js";
import axios from "axios";
import Payment from "./Components/Cart/Payment.js";
import OrderSuccess from "./Components/Cart/OrderSuccess.js";
import MyOrders from './Components/Order/MyOrders.js'
function App() {
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getSytripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {
    getSytripeApiKey();
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<MenProducts />} />
          {/* <Route path="/women" element={<WomenProducts />} />
          <Route path="/kids" element={<KidsProduct />} /> */}
          <Route path="/products/:keyword" element={<MenProducts />} />
          <Route
            path="/account"
            element={<ProtectedRoute component={Account} />}
          />
          <Route
            path="/me/update"
            element={<ProtectedRoute component={UpdateProfile} />}
          />
          <Route
            path="/password/update"
            element={<ProtectedRoute component={UpdatePassword} />}
          />
          <Route path="/password/forgot" element={<ForgotPassword />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/shipping"
            element={<ProtectedRoute component={Shipping} />}
          />
          <Route
            path="/order/confirm"
            element={<ProtectedRoute component={ConfirmOrder} />}
          />
          {stripeApiKey && (
            <Route
              path="/process/payment"
              element={
                <Elements stripe={loadStripe(stripeApiKey)}>
                  <ProtectedRoute component={Payment} />
                </Elements>
              }
            />
          )}
          <Route
            path="/order/success"
            element={<ProtectedRoute component={OrderSuccess} />}
          />
          <Route
            path="/orders"
            element={<ProtectedRoute component={MyOrders} />}
          />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
