import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query"
import productReducer from "./products/ProductSlice"
import categoryReducer from "./Categories/CategoriesSlice";
import CartSlice from "./Cart/CartSlice"

let initialStore = {};
let store = configureStore({
    reducer:{
        categories:categoryReducer,
        products: productReducer,
        carts: CartSlice
    }
},
    initialStore, 
);

setupListeners(store.dispatch);

export default store;
