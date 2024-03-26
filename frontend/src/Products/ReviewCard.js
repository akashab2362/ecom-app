import React from 'react';
import ReactStars from 'react-rating-stars-component';
import user from '../Logo/user.png';

const ReviewCard = ({ review }) => {

    const options = {
    edit: false,
    color: "rgba(20, 20, 20, 0.1)",
    activeColor: "rgb(250 204 21)",
    size: window.innerWidth < 600 ? 20 : 25,
    value: review.rating,
    isHalf: true,
  }

  return (
    <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
        <div className="flex flex-col overflow-hidden shadow-xl">
            <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                <div className="flex-1">
                    <div className="flex items-center">
                        <ReactStars {...options} />
                    </div>

                    <blockquote className="flex-1 mt-8">
                        {review.comment}
                    </blockquote>
                </div>

                <div className="flex items-center mt-8">
                    <img className='flex-shrink-0 object-cover rounded-full w-11 h-11' src={user} alt='user' />
                    <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">
                            {review.name}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard;
