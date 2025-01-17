// src/context/TransactionContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [budgets, setBudgets] = useState([]);

  // Simulate initial data fetch
  useEffect(() => {
    // Initial categories and budgets could be fetched from an API or defined here
    setCategories([
      { id: 1, name: "Food", color: "#C34AEB" },
      { id: 2, name: "Subscriptions", color: "#C32A81" },
      // Add more categories
    ]);
    setBudgets([
      { id: 1, name: "Groceries", amountAllocated: 5000, amountSpent: 50 },
      // Add more budgets
    ]);
  }, []);

  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, { id: Date.now(), ...transaction }]);
  };

  const updateTransaction = (updatedTransaction) => {
    setTransactions((prev) =>
      prev.map((t) => (t.id === updatedTransaction.id ? updatedTransaction : t))
    );
  };

  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        categories,
        budgets,
        addTransaction,
        updateTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
