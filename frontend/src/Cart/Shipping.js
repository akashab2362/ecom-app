import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { saveShippingInfo } from '../actions/cartAction';
import MetaData from '../Layout/MetaData';
import { useAlert } from 'react-alert';

const Shipping = ({ history }) => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const { shippingInfo } = useSelector((state) => state.cart);

    const [address, setAddress] = useState(shippingInfo.address);
    const [city, setCity] = useState(shippingInfo.city);
    const [state, setState] = useState(shippingInfo.state);
    const [country, setCountry] = useState(shippingInfo.country);
    const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

    const shippingSubmit = (e) => {
      e.preventDefault();

      if(phoneNo.length < 10 || phoneNo.length > 10) {
        alert.error("Phone Number should be 10 digits long");
        return;
      }

      dispatch(saveShippingInfo({ address, city, state, country, pinCode, phoneNo }));
      history.push("/order/confirm");
    }

  return (
    <div>
      
    </div>
  )
}

export default Shipping
