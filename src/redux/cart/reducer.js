import {ADDCART} from "./action-types";

const initialState = [];

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDCART:

        default:
            return state;
    }
}

export default cartReducer;