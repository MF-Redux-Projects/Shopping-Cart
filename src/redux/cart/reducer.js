import {ADDCART, REMOVECART} from "./action-types";
import {addItemToCart, removeItemFromCart} from "./cart-functions";

const initialState = [];

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDCART:
            return addItemToCart(state, action.product);
        case REMOVECART:
            return removeItemFromCart(state, action.product);
        default:
            return state;
    }
}

export default cartReducer;