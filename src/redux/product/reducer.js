import {INCREMENT, DECREMENT} from "./action-types";

const initialState = [
    {
        id: 1,
        name: "Asus Vivobook X515MA",
        price: "35,500",
        stock: 3,
    },
    {
        id: 2,
        name: "Dell E1916HV 18.5 Inch",
        price: "9,300",
        stock: 35,
    },
    {
        id: 3,
        name: "Canon Eos 4000D 18MP",
        price: "40,500",
        stock: 50,
    },
];

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            //stock increase
            return [
                ...state,
                {
                    ...state.find((product) => product.id === action.productID),
                    stock: state.find((product) => product.id === action.productID).stock + 1,
                }
            ]
        case DECREMENT:
            //stock decrease
            return [
                ...state,
                {
                    ...state.find((product) => product.id === action.productID),
                    stock: state.find((product) => product.id === action.productID).stock - 1,
                }
            ]
        default:
            return state;
    }
}

export default productReducer;