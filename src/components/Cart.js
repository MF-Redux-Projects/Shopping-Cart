import React from 'react';
import {useSelector} from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart);

    const cartTotalAmount = cartItems.reduce(
        (accumalatedCount, cartItem) =>
            accumalatedCount + cartItem.quantity * cartItem.price.replace(",", ""),
        0
    );
    const cartTotalItem = cartItems.reduce(
        (accumalatedCount, cartItem) => accumalatedCount + cartItem.quantity,
        0
    );

    return (
        <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
            <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                {
                    cartItems.length > 0
                        ? cartItems.map((cartItem) => (
                            <CartItem key={cartItem.id} cartItem={cartItem}/>
                        ))
                        : <div className="text-center text-gray-500 font-semibold text-2xl mb-10">Cart is empty</div>
                }
                <div className="flex justify-center items-center text-center">
                    <div className="text-xl font-semibold">
                        <p>Total Item</p>
                        <p className="text-5xl">{cartTotalItem}</p>
                    </div>
                </div>
            </div>
            <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                <div
                    className="flex justify-center items-center text-center"
                >
                    <div className="text-xl font-semibold">
                        <p>Total Price</p>
                        <p className="text-5xl">{cartTotalAmount}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;