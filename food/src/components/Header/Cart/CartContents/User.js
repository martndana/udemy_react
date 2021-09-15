import React, { useState, useRef } from 'react'
import Button from '../../../UI/Button/Button';
import Input from '../../../UI/Input/Input';

import styles from './User.module.css';

const User = (props) => {

    const [formInputValidity, setFormInputValidity] = useState({
        fName: true,
        lName: true,
        address: true,
        city: true,
        postalCode: true});

    const fNameInputRef = useRef();
    const lNameInputRef = useRef();
    const addressInputRef = useRef();
    const cityInputRef = useRef();
    const postalCodeInputRef = useRef();

    const isEmpty = value => value.trim() === '';
    const isValidPostalCode = value => value.trim().length === 6 || value.trim().length === 7;    
    
    const submitHandler = (event) => {
        event.preventDefault();
        
        const enteredFName = fNameInputRef.current.value;
        const enteredLName = lNameInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        
        const fNameIsValid = !isEmpty(enteredFName);
        const lNameIsValid = !isEmpty(enteredLName);
        const addressIsValid = !isEmpty(enteredAddress);
        const cityIsValid = !isEmpty(enteredCity);
        const postalCodeIsValid = isValidPostalCode(enteredPostalCode);

        setFormInputValidity({
            fname: fNameIsValid,
            lName: lNameIsValid,
            address: addressIsValid,
            city: cityIsValid,
            postalCode: postalCodeIsValid
        });
        
        const formIsValid = fNameIsValid && lNameIsValid && addressIsValid && cityIsValid && postalCodeIsValid;

        if (!formIsValid) {
            return ;
        }

        props.onConfirm({
            fName: enteredFName,
            lName: enteredLName,
            address: enteredAddress,
            city: enteredCity,
            postalCode: enteredPostalCode
        });

    }

    //Set Styles
    const fNameStyle = formInputValidity.fName ? 'form-control' : 'form-control invalid';
    const lNameStyle = formInputValidity.lName ? 'form-control' : 'form-control invalid';
    const addressStyle = formInputValidity.address ? 'form-control' : 'form-control invalid';
    const cityStyle = formInputValidity.city ? 'form-control' : 'form-control invalid';
    const postalCodeStyle = formInputValidity.postalCode ? 'form-control' : 'form-control invalid';

    return (
        <form onSubmit={submitHandler}>
            <div className={styles['form-controls']}>
                <Input 
                    className={fNameStyle} 
                    type='text' 
                    label='First Name' 
                    input={{
                        id: 'fName', 
                        type: 'text'
                    }} 
                    ref={fNameInputRef}
                />
                {!formInputValidity.fName && <p className={styles['error-text']}>Please enter a valid first name</p>}
                <Input 
                    className={lNameStyle} 
                    type='text' 
                    label='Last Name'  
                    input={{
                        id: 'lName', 
                        type: 'text'
                    }}
                    ref={lNameInputRef}
                />
                {!formInputValidity.lName && <p className={styles['error-text']}>Please enter a valid last name</p>}
                <Input 
                    className={addressStyle} 
                    type='text' 
                    label='Address'  
                    input={{
                        id: 'address', 
                        type: 'text'
                    }} 
                    ref={addressInputRef}
                />
                {!formInputValidity.address && <p className={styles['error-text']}>Please enter a valid address</p>}
                <Input 
                    className={cityStyle} 
                    type='text' 
                    label='City'  
                    input={{
                        id: 'city', 
                        type: 'text'
                    }} 
                    ref={cityInputRef}
                />
                {!formInputValidity.city && <p className={styles['error-text']}>Please enter a valid city</p>}
                <Input 
                    className={postalCodeStyle} 
                    type='text' 
                    label='Postal Code'  
                    input={{
                        id: 'postalCode', 
                        type: 'text'
                    }} 
                    ref={postalCodeInputRef}
                />
                {!formInputValidity.postalCode && <p className={styles['error-text']}>Please enter a valid postal code</p>}
            </div>
            <div className={styles['form-actions']}>
                <Button type='button' name='Cancel' onClick={props.onCancel} />
                <Button type='submit' name='Continue' />
            </div>

        </form>
    )
}

export default User
