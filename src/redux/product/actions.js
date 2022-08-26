import {LOADED} from "./action-types";

export const loaded = (products) => {
    return {
        type: LOADED,
        products
    }
}