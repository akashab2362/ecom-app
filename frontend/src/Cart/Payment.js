import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import axios from 'axios';
import { CreditCard, KeyRound, Calendar } from 'lucide-react';
import {
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
    useStripe,
    useElements
} from '@stripe/react-stripe-js';

import CheckoutSteps from './CheckoutSteps';
import MetaData from '../Layout/MetaData';
import { createOrder, clearErrors } from '../actions/orderAction';


const Payment = ({ history }) => {

    const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

    const dispatch = useDispatch();
    const alert = useAlert();
    const stripe = useStripe();
    const elements = useElements();
    const payBtn = useRef(null);

    const { shippingInfo, cartItems } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.user);
    const { error } = useSelector((state) => state.newOrder);

    const paymentData = {
        amount: Math.round(orderInfo.totalPrice * 100)
    };

    const order = {
        shippingInfo,
        orderItemms: cartItems,
        itemsPrice: orderInfo.subtotal,
        taxPrice: orderInfo.tax,
        shippingPrice: orderInfo.shippingCharges,
        totalPrice: orderInfo.totalPrice
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        payBtn.current.disabled = true;

        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            };

            const { data } = await axios.post("/api/v1/payment/process", paymentData, config);
            const client_secret = data.client_secret;

            if (!stripe || elements) return;

            const result = await stripe.confirmCardPayment(client_secret, {
                payment_method: {
                    card: elements.getElement(CardNumberElement),
                    billing_details: {
                        name: user.name,
                        email: user.email,
                        address: {
                            line1: shippingInfo.address,
                            city: shippingInfo.city,
                            state: shippingInfo.state,
                            postal_code: shippingInfo.pinCode,
                            country: shippingInfo.country
                        }
                    }
                }
            });

            if (result.error) {
                payBtn.current.disabled = false;
                alert.error(result.error.message);
            }
            else {
                if (result.paymentIntent.status === "succeeded") {

                    order.paymentInfo = {
                        id: result.paymentIntent.id,
                        status: result.paymentIntent.status
                    };

                    dispatch(createOrder(order))

                    history.push("/success");
                }
                else {
                    alert.error("There's some issue while processing payment")
                }
            }

        }
        catch (error) {
            payBtn.current.disabled = false;
            alert.error(error.response.data.message);
        }
    };

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, error, alert])

    return (
        <>

            <MetaData title={"Payment -- Byte Bazaar"} />

            <CheckoutSteps activeStep={2} />

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold font-serif leading-9 tracking-tight text-gray-900">
                        Payment
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" encType='multipart/form-data' onSubmit={submitHandler(e)} >
                        <div>
                            <CreditCard className='absolute translate-x-3.5 translate-y-1.5' />
                            <CardNumberElement className='form-input block w-full rounded-md border-0 py-5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                        </div>
                        <div>
                            <Calendar className='absolute translate-x-3.5 translate-y-1.5' />
                            <CardExpiryElement className='form-input block w-full rounded-md border-0 py-5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                        </div>
                        <div>
                            <KeyRound className='absolute translate-x-3.5 translate-y-1.5' />
                            <CardCvcElement className='form-input block w-full rounded-md border-0 py-5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                        </div>
                        <div>
                            <input
                                type="submit"
                                value={`Pay - ₹${ orderInfo && orderInfo.totalPrice }`}
                                ref={ payBtn }
                                className="flex w-full justify-center rounded-md bg-black px-6 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            />
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Payment;
