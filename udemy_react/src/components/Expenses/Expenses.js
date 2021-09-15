import React, { useState } from 'react'
import './Expenses.css'
import ExpensesList from './../ExpensesList/ExpensesList'
import ExpensesChart from './ExpensesChart'
import Card from './../Card/Card'
import Filter from './../Filter/Filter'


export const Expenses = ({ expenses }) => {

    const [filterYear, setFilterYear] = useState('2020');
    console.log(expenses);
    const filterByYear = (filterData) => {
        setFilterYear(filterData);
    };

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    });

    return (
        <div>
            <Card className='expenses'>
                <Filter filterValue={filterYear} onFilterYearChange={filterByYear} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList expenses={filteredExpenses}/>;
            </Card>
        </div>
    )
}

export default Expenses;
