import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import MetaData from '../Layout/MetaData';
import CheckoutSteps from './CheckoutSteps';

const ConfirmOrder = () => {
const navigate = useNavigate();
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const subtotal = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const shippingCharges = subtotal > 1000 ? 0 : 200;
  const tax = subtotal * 0.18;
  const totalPrice = subtotal + tax + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

  const proceedToPayment = () => {

    const data = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    navigate("/process/payment");
  };

  return (
    <>

      <MetaData title="Confirm Order -- Byte Bazaar" />

      <CheckoutSteps activeStep={1} />

      <div className='grid grid-cols-2'>
        <div className='mx-2'>
          <div className=' max-w-md mx-16'>
            <div className="max-w-md mx-auto mt-12 mb-10 text-start">
              <h2 className="text-2xl sans-serif font-bold text-gray-900 sm:text-3xl">
                Shipping Info
              </h2>
            </div>
            <div className='flex gap-2.5 my-1'>
              <p className='justify-between text-lg font-bold text-gray-900'>Name :</p>
              <span className='justify-between text-lg font-medium text-gray-900'>{user.name}</span>
            </div>
            <div className='flex gap-x-2.5 my-1'>
              <p className='justify-between text-lg font-bold text-gray-900'>Phone :</p>
              <span className='justify-between text-lg font-medium text-gray-900'>{shippingInfo.phoneNo}</span>
            </div>
            <div className='flex gap-x-2.5 my-1'>
              <p className='justify-between text-lg font-bold text-gray-900'>Address:</p>
              <span className='justify-between text-lg font-medium text-gray-900'>{address}</span>
            </div>
          </div>

          <div className="m-8 ">
            <div className="flow-root ">
              <div className="max-w-md mx-auto my-11 text-start">
                <h2 className="text-2xl sans-serif font-bold text-gray-900 sm:text-3xl">
                  Your Cart Items
                </h2>
              </div>
              <ul role="list" className="-my-4 divide-y divide-gray-300">
                {
                  cartItems && cartItems.map((item) => (
                    <li key={item.product} className="flex py-6">
                      <div className="h-24 w-24 ml-10 flex-shrink-0 overflow-hidden rounded-md border border-gray-300">
                        <img
                          src={item.image}
                          alt="Product"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">

                        <div className="flex flex-col justify-between text-base font-medium text-gray-900">
                          <h3>
                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                          </h3>
                          <p>{item.price}</p>
                        </div>

                        <div className="flex flex-col place-items-center justify-between text-base font-medium text-gray-900 ml-14">
                          <div className="flex -mt-12">
                            <h3>{item.quantity}</h3>
                          </div>
                        </div>

                        <div className='flex flex-col -mt-12 mr-10 place-items-end justify-between text-sm'>
                          <p className='justify-between text-base font-medium text-gray-900'>
                            {`₹${item.price * item.quantity}`}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='divide-x divide-gray-400'>
          <div className="max-w-md mx-auto my-12 text-center">
            <h2 className="text-2xl text-center sans-serif font-bold text-gray-900 sm:text-3xl">
              Order Summary
            </h2>
          </div>
          <div className='pl-10 '>
            <div className='flex mx-10 my-1 justify-between'>
              <p className='justify-between text-lg font-bold text-gray-900'>Subtotal :</p>
              <span className='justify-between text-lg font-medium text-gray-900'>₹{subtotal}</span>
            </div>
            <div className='flex mx-10 my-1 justify-between'>
              <p className='justify-between text-lg font-bold text-gray-900'>Shipping Charges :</p>
              <span className='justify-between text-lg font-medium text-gray-900'>₹{shippingCharges}</span>
            </div>
            <div className='flex mx-10 my-1 justify-between'>
              <p className='justify-between text-lg font-bold text-gray-900'>GST :</p>
              <span className='justify-between text-lg font-medium text-gray-900'>₹{tax}</span>
            </div>

            <div className='border-t-2 border-gray-200'>
              <div className='flex mx-10 my-1 justify-between'>
                <p className='justify-between text-lg font-bold text-gray-900'>Total :</p>
                <span className='justify-between text-lg font-medium text-gray-900'>₹{totalPrice}</span>
              </div>
            </div>
          </div>

          <button
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 ml-44 my-14 px-16 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            onClick={ proceedToPayment }
          >
            Proceed to Payment
          </button>
        </div>
      </div>

    </>
  )
}

export default ConfirmOrder;