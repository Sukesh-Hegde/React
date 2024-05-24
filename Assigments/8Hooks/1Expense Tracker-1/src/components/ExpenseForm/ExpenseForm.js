import React, { useState } from "react";
import styles from "./ExpenseForm.module.css"

const ExpenseForm = ({ setExpenses }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    setText("");
    setAmount("");
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <h3>Add new transaction</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense, positive - income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button className={styles.submitBtn}>Add Transaction</button>
    </form>
  );
};

export default ExpenseForm;
