import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { addItemsToCart, removeItemsFromCart } from '../actions/cartAction';
import { addItemsToCart, removeItemsFromCart } from "../store/cartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;

    if (stock <= quantity) return;

    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;

    if (1 >= quantity) return;

    dispatch(addItemsToCart(id, newQty));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart({ id }));
  };

  const checkoutHandler = () => {
    if (isAuthenticated) {
        navigate("/shipping");
      } else {
        navigate("/login");
      }
  };

  return (
    <>
      <h1 className="text-xl font-bold text-center my-10 text-gray-900">
        Shopping cart
      </h1>

      {cartItems.length === 0 ? (
        <>
          <div className="max-w-md m-12 opacity-40 font-serif mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              No Products in your Cart
            </h2>
          </div>
        </>
      ) : (
        <>
          {/* Cart Section */}
          <div className="mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {cartItems &&
                  cartItems.map((item) => (
                    <li key={item.product} className="flex py-6">
                      {/* Image */}
                      <div className="h-24 w-24 ml-10 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      {/* Details Section */}
                      <div className="ml-4 flex flex-1 flex-col">
                        <div className="flex flex-col justify-between text-base font-medium text-gray-900">
                          <h3>
                            <Link to={`/product/${item.product}`}>
                              {item.name}
                            </Link>
                          </h3>
                          <p>{`₹${item.price}`}</p>
                        </div>

                        {/* Plus Minus Button */}
                        <div className="flex flex-col place-items-center justify-between text-sm">
                          <div className="flex -mt-11">
                            <button
                              className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                              onClick={() =>
                                decreaseQuantity(item.product, item.quantity)
                              }
                            >
                              −
                            </button>
                            <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
                              {item.quantity}
                            </div>
                            <button
                              className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                              onClick={() =>
                                increaseQuantity(
                                  item.product,
                                  item.quantity,
                                  item.stock
                                )
                              }
                            >
                              +
                            </button>
                          </div>

                          <div className="flex mt-2">
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => deleteCartItems(item.product)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>

                        {/* Sub Total */}
                        <div className="flex flex-col -mt-11 mr-10 place-items-end justify-between text-sm">
                          <p className="justify-between text-base font-medium text-gray-900">
                            {`₹${item.price * item.quantity}`}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          {/* Gross Total Section */}
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex mx-10 justify-between text-base font-bold text-gray-900">
              <h2>Gross Total</h2>
              <h2>
                {`₹${cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )}`}
              </h2>
            </div>

            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>

            <div className="flex flex-col justify-center items-center">
              <div className="mt-6 w-64 ">
                <button
                  className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-20 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  onClick={checkoutHandler}
                >
                  Checkout
                </button>
              </div>

              <div className="mt-6 text-sm text-gray-500">
                <p className="text-center">or</p>
                <p className="text-center my-3">
                  <Link to={"/"}>
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
