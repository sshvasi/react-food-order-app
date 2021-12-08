import React, { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const [isBtnHighlited, setIsBtnHighlited] = useState(false);
    const { items } = useContext(CartContext);

    const numberOfCartItems = items.reduce((currNumber, item) => {
        return currNumber + item.amount;
    }, 0);

    useEffect(() => {
        if (items.length === 0) return;
        setIsBtnHighlited(true);
        const timer = setTimeout(() => {
            setIsBtnHighlited(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    const btnClasses = `${classes.button} ${
        isBtnHighlited ? classes.bump : ''
    }`;

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
