import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddExpense(false);
  };

  const [addExpense, setAddExpense] = useState(false);

  const addButtonHandler = function () {
    setAddExpense(true);
  };

  const addCancelHandler = function () {
    setAddExpense(false);
  };

  return (
    <div className="new-expense">
      {!addExpense ? (
        <button onClick={addButtonHandler}>Add New Expense</button>
      ) : (
        ""
      )}
      {addExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={addCancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
