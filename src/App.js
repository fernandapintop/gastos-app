import React, { useState } from "react";

import ExpenseComponents from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpense] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // tambien se puede hacer de esta manera , mandandole todo el obejto
  //  <ExpenseItem expense=expenses[0];
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseComponents expense={expenses}></ExpenseComponents>
    </div>
  );
}

export default App;
