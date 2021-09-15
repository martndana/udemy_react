import React from 'react'
import Cart from './Cart/Cart';

import styles from './Header.module.css';
import image from '../../assets/meals.jpg'



const Header = (props) => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <div className={styles.header__flex}>
                    <h1>ReactMeals</h1>
                    <Cart onShow={props.onShow}/>
                </div>
            </header>
            <div className={styles['main-image']}>
                <img src={image} alt='A table full of delicious food!' />
            </div>
        </React.Fragment>
    )
}

export default Header
