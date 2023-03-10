import {useDispatch} from "react-redux";
import {addCart, removeCart} from "../redux/cart/actions";
import {increment, decrement} from "../redux/product/actions";

const CartItem = ({cartItem}) => {
    const dispatch = useDispatch();

    const addCartHandler = () => {
        dispatch(addCart(cartItem));
        dispatch(decrement(cartItem.id));
    }

    const removeCartHandler = () => {
        dispatch(removeCart(cartItem));
        dispatch(increment(cartItem.id));
    }

    return (
        <div className="flex justify-between border-b-2 mb-2">
            <div className="text-lg py-2">
                <p>{cartItem.name}</p>
            </div>
            <div className="text-lg py-2">
                <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                    <button
                        className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                        onClick={removeCartHandler}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                d="M18 12H6"
                            />
                        </svg>
                    </button>
                    <p>{cartItem.quantity}</p>
                    <button
                        className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                        onClick={addCartHandler}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;