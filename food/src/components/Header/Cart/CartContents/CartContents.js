import React, { useState, useContext } from 'react'
import Modal from '../../../UI/Modal/Modal';
import CartContext from '../../../../store/cart-context';
import CartItem from './CartItem';
import User from './User';

import styles from './CartContents.module.css';

const CartContents = (props) => {
    const [showOrder, setShowOrder] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setdidSubmit] = useState(false);

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const tax = `$${(cartCtx.totalAmount * 0.13).toFixed(2)}`;
    const grandTotal = `$${(cartCtx.totalAmount * 1.13).toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0 ;

    const onAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    };

    const onRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const onOrderHandler = (event) => {
        setShowOrder(true);
    }

    const onHideHandler = () => {
        setShowOrder(false);
        props.onHide();
    }

    const cartItems = 
        <ul className={styles['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem 
                    key={item.id} 
                    name={item.name} 
                    price={item.price} 
                    amount={item.amount} 
                    onAdd={onAddHandler.bind(null, item)} 
                    onRemove={onRemoveHandler.bind(null, item.id)}/>
            ))}
            
        </ul>;

    const onConfirmHandler = async (userData) => {
        setIsSubmitting(true);
        const response = await fetch('https://react-http-78338-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        });

        if (!response.ok) {
            throw new Error('Something went wrong');
        };

        setIsSubmitting(false);
        setdidSubmit(true);
        cartCtx.clearCart();

    }

    const cartModalContent = <>
        {/* Cart Items */}
        {cartItems}

        {/* Total Amount */}
        <div>
            <div className={styles.total}>
                <span>Subtotal</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.total}>
                <span>Tax</span>
                <span>{tax}</span>
            </div>
            <div className={styles.total}>
                <span>Grand Total</span>
                <span>{grandTotal}</span>
            </div>
        </div>
        {showOrder && <User onConfirm={onConfirmHandler} onCancel={onHideHandler}/>}
        {/* Controls */}
        {!showOrder &&
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.onHide}>Close</button>
            {hasItems && <button className={styles.button} onClick={onOrderHandler}>Order</button>}
        </div>}
    </>;

    const isSubmittingModalContent = <p>Sending order data...</p>

    const didSubmitModalContent = <>
        <p>Sucessfully sent the order!</p>
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.onHide}>Close</button>
        </div>
    </>;

    return (
        <Modal onHide={props.onHide}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {didSubmit && didSubmitModalContent}
        </Modal>
    )
}

export default CartContents
