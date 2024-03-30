import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import MetaData from '../Layout/MetaData';

const ConfirmOrder = () => {

    const { shippingInfo, cartItems } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.user);

    const subtotal = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
    const shippingCharges = subtotal > 1000 ? 0 : 200;
    const tax = subtotal * 0.10;
    const totalPrice = subtotal + tax + shippingCharges;

    const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

  return (
    <div>
      
    </div>
  )
}

export default ConfirmOrder
