import React, { useState } from "react";
import Card from "../UI/Card";

import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filterSelectedYear, setFilterSelectedYear] = useState(
    new Date().getFullYear().toString()
  );

  const saveSelectedYear = (selectedYear) => {
    setFilterSelectedYear(selectedYear);
  };

  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filterSelectedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseFilter
        defaultSelected={filterSelectedYear}
        onSaveSelectedYear={saveSelectedYear}
      />
      <ExpensesList
        items={filteredExpenses}
        filterSelected={filterSelectedYear}
      />
    </Card>
  );
}

export default Expenses;
