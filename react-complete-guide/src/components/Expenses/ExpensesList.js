import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const expenseDetail = props.items.map((expense) => {
    return (
      <li>
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      </li>
    );
  });

  if (expenseDetail.length === 0) {
    return <h2 className="expenses-list__fall">No expenses found.</h2>;
  }

  return <ul className="expenses-list"> {expenseDetail}</ul>;
};

export default ExpensesList;
