import {LOADED} from "./action-types";

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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADED:
            return action.products;
    }
}

export default reducer;