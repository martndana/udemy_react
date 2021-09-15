import React from 'react'
import './ExpenseItem.css'
import Calendar from './../Calendar/Calendar'
import Card from './../Card/Card'

const ExpenseItem = ({ date, title, price }) => {
    
    return (
        <li>
            <Card className='expense-item'>
                <Calendar date={date} />
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>${price}</div>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem
