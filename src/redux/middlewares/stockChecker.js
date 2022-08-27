import {ADDCART} from "../cart/action-types";
import {DECREMENT} from "../product/action-types";

const StockChecker = store => next => action => {
    if (action.type === ADDCART || action.type === DECREMENT) {
        const state = store.getState();
        const productId = action.type === ADDCART ? action.product.id : action.productID;
        const product = state.products.find(product => product.id === productId);
        if (product.stock <= 0){
            console.log("Sorry, we are out of stock!");
            return;
        }
    }
    return next(action);
}

export default StockChecker;