import React, { useState } from 'react'
import './NewExpense.css';
import ExpenseForm from './../ExpenseForm/ExpenseForm';

const NewExpense = ( { onSaveEnteredData }) => {

    const [showForm, setShowForm] = useState(false); 

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        onSaveEnteredData(expenseData);
        toggleForm();
    }

    const toggleForm = () => {
            setShowForm(!showForm);
    }

    return (
        <div className="new-expense">
            
            {showForm ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onFormToggle={toggleForm} /> : <button onClick={toggleForm}>Add New Expense</button>}

            
        </div>
    )
}

export default NewExpense;
