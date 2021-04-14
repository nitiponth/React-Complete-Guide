import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Black Coffee Honey",
    amount: 35,
    date: new Date(2021, 3, 13),
  },
  {
    id: "e2",
    title: "Watermelon Jelly",
    amount: 30,
    date: new Date(2021, 2, 13),
  },
  {
    id: "e3",
    title: "Noon meal",
    amount: 39,
    date: new Date(2021, 2, 13),
  },
  {
    id: "e4",
    title: "Mike",
    amount: 20,
    date: new Date(2021, 3, 13),
  },
  {
    id: "e5",
    title: "Bread",
    amount: 22,
    date: new Date(2021, 5, 13),
  },
  {
    id: "e6",
    title: "cat",
    amount: 18000,
    date: new Date(2022, 6, 4),
  },
  {
    id: "e7",
    title: "Laptop",
    amount: 45000,
    date: new Date(2019, 5, 13),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
};

export default App;
