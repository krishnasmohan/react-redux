import { createSelector } from "@reduxjs/toolkit";

export const cartItem = (state) => state.carts.carts;

export const totalCartItem = createSelector(cartItem, (item) => {
    let total = 0;
    if(item) {
        item.map((i) => (total += i.quantity));
    }
    return total;
});

export const subTotalPrice = createSelector(cartItem, (item) => {
    let total = 0;
    if(item){
        item.map((i) => (total += i.price * i.quantity));
    }
    return total.toFixed(2);
});

export const totalTax = createSelector(subTotalPrice, (tax) => 
    (tax * (2/100)).toFixed(2)
);

export const totalPrice = createSelector(
    subTotalPrice,
    totalTax,
    (subtotal, tax) => parseFloat(subtotal) + parseFloat(tax)
);