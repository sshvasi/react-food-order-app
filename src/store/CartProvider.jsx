import React, { useReducer } from 'react';
import CartContext from './cart-context';

const initialCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                items: [...state.items, action.item],
                totalAmount:
                    state.totalAmount + action.item.price * action.item.amount,
            };
        case 'REMOVE':
            return {
                items: state.items.filter((item) => item.id !== action.id),
                totalAmount:
                    state.totalAmount + action.item.price * action.totalAmount,
            };
        default:
            return state;
    }
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        initialCartState
    );

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
