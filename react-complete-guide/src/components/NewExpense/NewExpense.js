import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [showFrom, setShowFrom] = useState(false);

  const toggleShowFrom = () => {
    setShowFrom((prevState) => !prevState);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {showFrom ? (
        <ExpenseForm
          onSaveExpenseDate={saveExpenseDataHandler}
          onToggleShowFrom={toggleShowFrom}
        />
      ) : (
        <button onClick={toggleShowFrom}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
