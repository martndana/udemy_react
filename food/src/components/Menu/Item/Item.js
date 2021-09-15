import React, { useContext } from 'react';
import MealItemForm from './MealItemForm/MealItemForm';
import CartContext from '../../../store/cart-context';

import styles from './Item.module.css';

const Item = (props) => {

    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }
    
    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.details}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div className={styles.form}>
                <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    )
}

export default Item
