import React, { useState } from 'react'
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [expensesArr, setExpensesArr] = useState(INITIAL_DATA);



  const addExpenseHandler = (enteredExpenseData) => {
    setExpensesArr(prevExpensesArr => {
      return [enteredExpenseData, ...prevExpensesArr];
    });
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
        <NewExpense onSaveEnteredData={ addExpenseHandler }/>
        <Expenses expenses={expensesArr} />
    </div>
  );
}

export default App;
