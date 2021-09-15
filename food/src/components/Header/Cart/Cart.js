import React, { useContext, useEffect, useState } from 'react'
import CartIcon from './CartIcon';
import CartContext from '../../../store/cart-context';

import styles from './Cart.module.css';

const Cart = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;
    
    
    const numberOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);
    
    const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;
    
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };

    },[items]);

    return (
        <button className={btnClasses} onClick={props.onShow}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}

export default Cart
