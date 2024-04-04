import React from "react";
import "./customerCare.css";

const CustomerCare = () => {
  return (
    <div className="customerCareContainer">
      <h2 className="customerCareHeading">Customer Care</h2>
      <div className="customerCareContent">
        <p>
          Welcome to our Customer Care page. We are here to assist you with any questions or concerns you may have regarding our products, services, or your orders.
        </p>
        <p>
          Please feel free to reach out to us through the following channels:
        </p>
        <ul>
          <li>Email: support@example.com</li>
          <li>Phone: 123-456-7890</li>
          <li>Live Chat: Available on our website</li>
        </ul>
        <p>
          Our dedicated customer care team is available to help you during our business hours, Monday to Friday from 9:00 AM to 5:00 PM.
        </p>
        <p>
          Thank you for choosing us. We look forward to serving you!
        </p>
      </div>
    </div>
  );
};

export default CustomerCare;
