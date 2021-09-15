import React, { useRef, useState } from 'react'
import Button from '../../../UI/Button/Button';
import Input from '../../../UI/Input/Input';

import styles from './MealItemForm.module.css';

const MealItemForm = (props) => {

    const amountInputRef = useRef();

    const [isValid, setIsValid] = useState(true);

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNum = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 5) {
            setIsValid(false)
            return;
        }

        props.onAddToCart(enteredAmountNum);
    }



    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input ref={amountInputRef} label='Amount' input={{id: 'amount_' + props.id, type: 'number', min: '1', max: '5', step: '1', defaultValue: '1'}} />
            <Button type='button' name="+ Add" />
            {!isValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    )
}

export default MealItemForm
