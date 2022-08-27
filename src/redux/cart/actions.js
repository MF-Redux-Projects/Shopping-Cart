import {ADDCART, REMOVECART} from "./action-types";

export const addCart = (product) => {
    return {
        type: ADDCART,
        product,
    };
}

export const removeCart = (product) => {
    return {
        type: REMOVECART,
        product,
    };
}