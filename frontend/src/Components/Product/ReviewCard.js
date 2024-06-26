import React from "react";
import ReactStars from "react-rating-stars-component";
import user from "../../assets/user.png";
import './ProductDetails.css'

const ReviewCard = ({ review }) => {
  const options = {
    edit: false,
    color: "rgba(20, 20, 20, 0.1)",
    activeColor: "rgb(250 204 21)",
    size: window.innerWidth < 600 ? 20 : 25,
    value: review.rating,
    isHalf: true,
  };

  return (
    <div className="reviewCard">
      <img src={user} alt="User" />
      <p className="reviewtitle">{review.name}</p>
      <ReactStars {...options} />
      <p className="overflow-scroll reviewCardComment">{review.comment}</p>
    </div>
  );
};

export default ReviewCard;
