import {createStore, applyMiddleware} from "redux";
import rootReducer from "./root-reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import StockChecker from "./middlewares/stockChecker";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(StockChecker)));

export default store;