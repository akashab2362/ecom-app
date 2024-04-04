import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
    return (
        <>

            <div className='flex flex-col text-center h-3/6 m-auto p-32 justify-center items-center'>
                <CheckCircle size={80} strokeWidth={2.25} className="text-indigo-700" />

                <h1 className='prose text-3xl font-serif font-semibold mt-3.5'>
                    Your Order has been Placed successfully!
                </h1>
                <Link to={"/order/me"}>
                    <span className='m-6 text-white font-medium bg-black cursor-pointer my-3.5 py-3 px-10'>
                        View Orders
                    </span>
                </Link>
            </div>

        </>
    )
}

export default OrderSuccess