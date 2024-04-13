import "./App.css";
import Home from "./Components/Home/Home.js";
import store from "./Components/store/store.js";
import { loadUser } from "./Components/store/userSlice.js";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout.js";
import Login from "./Components/Authentication/Login.js";
import Register from "./Components/Authentication/Register.js";
import Products from "./Components/Product/Products.js";
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
import OrderSuccess from "./Components/Cart/OrderSuccess.js";
import MyOrders from "./Components/Order/MyOrders.js";
import CustomerCare from "./Components/Layout/CustomerCare.js";
// import OrderDetails from "./Component/Order/OrderDetails";
import Dashboard from "./Components/Admin/Dashboard.js";
import ProductList from "./Components/Admin/ProductList.js";
import NewProduct from "./Components/Admin/NewProduct";
import UpdateProduct from "./Components/Admin/UpdateProduct";
// import OrderList from "./Components/Admin/OrderList";
// import ProcessOrder from "./Components/Admin/ProcessOrder";
// import UsersList from "./Components/Admin/UsersList";
// import UpdateUser from "./Components/Admin/UpdateUser";
// import ProductReviews from "./Components/Admin/ProductReviews";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:keyword" element={<Products />} />
          <Route path="/customercare" element={<CustomerCare />} />
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
          <Route path="/paymentsuccess" element={<OrderSuccess />} />
          <Route
            path="/orders"
            element={<ProtectedRoute component={MyOrders} />}
          />

          <Route
            path="/admin/dashboard"
            element={<ProtectedRoute isAdmin={true} component={Dashboard} />}
          />

          <Route
            path="/admin/products"
            element={<ProtectedRoute isAdmin={true} component={ProductList} />}
          />

          <Route
            path="/admin/product"
            element={<ProtectedRoute isAdmin={true} component={NewProduct} />}
          />
          <Route
            path="/admin/product/:id"
            element={
              <ProtectedRoute isAdmin={true} component={UpdateProduct} />
            }
          />
          {/*
          <Route
            path="/admin/orders"
            element={<ProtectedRoute isAdmin={true} component={OrderList} />}
          />
          <Route
            path="/admin/order/:id"
            element={<ProtectedRoute isAdmin={true} component={ProcessOrder} />}
          />
          <Route
            path="/admin/users"
            element={<ProtectedRoute isAdmin={true} component={UsersList} />}
          />
          <Route
            path="/admin/user/:id"
            element={<ProtectedRoute isAdmin={true} component={UpdateUser} />}
          />
          <Route
            path="/admin/reviews"
            element={
              <ProtectedRoute
                isAdmin={true}
                component={ProductReviews}
              />
            }
          /> */}

          {/* <Route
            component={
              window.location.pathname === "/process/payment" ? null : NotFound
            }
          /> */}
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
