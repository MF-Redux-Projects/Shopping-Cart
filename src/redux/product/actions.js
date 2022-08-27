import {INCREMENT, DECREMENT} from "./action-types";

export const increment = (productID) => {
    return {
        type: INCREMENT,
        productID
    }
}

export const decrement = (productID) => {
    return {
        type: DECREMENT,
        productID
    }
}