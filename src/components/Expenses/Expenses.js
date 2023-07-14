import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpensesChart";

function ExpenseComponents(props) {
  const [yearFiltered, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectYear) => {
    setFilteredYear(selectYear);
  };

  const filteredExpenses = props.expense.filter(
    (item) => item.date.getFullYear().toString() === yearFiltered
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilterChange={filterChangeHandler}
          selected={yearFiltered}
        ></ExpensesFilter>
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}

export default ExpenseComponents;
