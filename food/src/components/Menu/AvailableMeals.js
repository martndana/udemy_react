import React, { useState, useEffect } from 'react'

import Item from './Item/Item';
import Card from '../UI/Card/Card';

import styles from './AvailableMeals.module.css';

const Menu = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchMeals = async () => {
            setIsLoading(true);
            const response = await fetch('https://react-http-78338-default-rtdb.firebaseio.com/meals.json');

            if (!response.ok) {
                throw new Error('Something went wrong.');
            }

            const responseData = await response.json();

            const loadedMeals = [];
            for (const key in responseData) {
                loadedMeals.push({
                    id: key, 
                    name: responseData[key].name,
                    details: responseData[key].description,
                    price: responseData[key].price
                });
            }
            setMeals(loadedMeals);
            setIsLoading(false);
        };


        fetchMeals().catch ((error) => {
            setIsLoading(false);
            setHttpError('error.message');
            console.log(error.message)
        });
    }, []);

    if (isLoading) {
        return (
            <section className={styles['meals-loading']}>
                <p>Loading...</p>
            </section>
        );
    } 

    if (httpError) {
        return (
            <section>
                <p className={styles['meals-error']}>{httpError}</p>
            </section>
        )
    }
        
    const mealsList = meals.map((item) => (
        <Item 
            id={item.id} 
            key={item.id} 
            name={item.name} 
            details={item.details} 
            price={item.price} 
        />
    ));
    

    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}

export default Menu
