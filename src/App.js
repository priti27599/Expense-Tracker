import React, { useState } from 'react';
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id:'e1',
    title: "Study Loan EMI",
    amount: 10000,
    date: new Date(2023,3,28)
  },
  {
    id:'e2',
    title: "Laptop Loan EMI",
    amount: 6000,
    date: new Date(2023, 3, 29)
  },
  {
    id:'e3',
    title: "Electricity Bill",
    amount: 2000,
    date: new Date(2023, 3, 30)
  },
]

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App; 
