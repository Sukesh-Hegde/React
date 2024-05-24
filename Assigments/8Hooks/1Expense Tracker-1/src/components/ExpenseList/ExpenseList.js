import React from "react";
import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction";

const ExpenseList = ({ expenses, setExpenses }) => {
  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {expenses.map((expense, index) => (
          <Transaction
            key={expense.id}
            expense={expense}
            index={index}
            setExpenses={setExpenses}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
