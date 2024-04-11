import React, { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createOrder } from "../store/orderSlice";

const OrderSuccess = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.order);
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  useEffect(()=>{
    const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
    const order = {
      shippingInfo,
      orderItems: cartItems,
      itemsPrice: orderInfo.subtotal,
      taxPrice: orderInfo.tax,
      shippingPrice: orderInfo.shippingCharges,
      totalPrice: orderInfo.totalPrice,
    };
    dispatch(createOrder({order}));
  }, [shippingInfo, cartItems])
  return (
    <>
      <div className="flex flex-col text-center p-32 justify-center items-center bg-white rounded-2xl m-5">
        <CheckCircle size={80} strokeWidth={2.25} className="text-indigo-700" />

        <h1 className="prose text-3xl font-serif font-semibold mt-3.5">
          Your Order has been Placed successfully!
        </h1>
        <Link
          className="flex mt-10 justify-center items-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          to="/orders"
        >
          View Orders
        </Link>
      </div>
    </>
  );
};

export default OrderSuccess;
