import {useDispatch} from "react-redux";
import {addCart} from "../redux/cart/actions";
import {decrement} from "../redux/product/actions";

const Product = ({product}) => {
    const dispatch = useDispatch();

    const handleAddCart = () => {
        dispatch(addCart(product));

        dispatch(decrement(product.id));
    }
    return (
        <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            <div className="flex justify-between px-4 items-center">
                <div className="text-lg font-semibold">
                    <p>{product.name} ({product.stock})</p>
                    <p className="text-gray-400 text-base">Tk {product.price}</p>
                </div>
                <div className="text-lg font-semibold">
                    <button
                        className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
                        onClick={handleAddCart}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;