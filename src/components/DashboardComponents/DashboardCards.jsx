// src/components/DashboardComponents/DashboardCards.js
import React, { useState } from "react";
import { useCurrency } from "../../context/currencyContext"; // Use the Currency context
import { formatCurrency } from "../../utils/formatCurrency"; // Import the utility function
import "./DashboardCards.css"; // styles for the cards here

function DashboardCards() {
  const [activeSegment, setActiveSegment] = useState("cashflow");
  const { currency } = useCurrency(); // Access current currency from context
  const [transactions, setTransactions] = useState([
    { type: "income", amount: 5000, category: "Food" }, // Hardcoded for testing purposes
    { type: "expense", amount: 2000, category: "Food" },
    { type: "expense", amount: 1500, category: "Transportation" },
    { type: "income", amount: 7000, category: "Subscriptions" },
    { type: "expense", amount: 1000, category: "Utilities" },
  ]); // Hardcoded test transactions
  // Define categories array with sample data
  const categories = [
    { id: 1, name: "Food", color: "#C34AEB" },
    { id: 2, name: "Subscriptions", color: "#C32A81" },
    { id: 3, name: "Transportation", color: "#5CEB1B" },
    { id: 4, name: "Utilities", color: "#E3A576" },
    { id: 5, name: "Miscellaneous", color: "#C2B6B6" },
  ];

  const budgets = [
    { id: 1, name: "Groceries", amountAllocated: 5000, amountSpent: 50 },
    {
      id: 2,
      name: "Wedding expenses",
      amountAllocated: 3000,
      amountSpent: 4000,
    },
  ];

  // Function to calculate total income
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  // Function to calculate total expenses
  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  // Function to calculate Categories
  const categoryTotals = categories.map((category) => {
    const totalSpent = transactions
      .filter((t) => t.category === category.name && t.type === "expense") // Filter for expenses in the category
      .reduce((sum, t) => sum + t.amount, 0);

    const percentage =
      totalExpenses > 0 ? Math.min((totalSpent / totalExpenses) * 100, 100) : 0;
    console.log(
      `Category: ${category.name}, Total Spent: ${totalSpent}, Percentage: ${percentage}`
    );

    return { ...category, totalSpent, percentage };
  });

  return (
    <div className="dashboard-cards">
      {/* Total Balance Card */}
      <div className="card total-balance-card">
        <h3>Total Balance</h3>
        <p className="balance-placeholder">
          Link a bank account to view your balance.
        </p>
      </div>

      {/* Cashflow and Budget Card */}
      <div className="card cashflow-budget-card">
        {/* Container for both Cashflow and Budget headers */}
        <div className="header-container">
          {/* Cashflow header */}
          <div
            className={`header ${activeSegment === "cashflow" ? "active" : ""}`}
            onClick={() => setActiveSegment("cashflow")}
          >
            <h3>Cashflow</h3>
          </div>

          {/* Budget header */}
          <div
            className={`header ${activeSegment === "budget" ? "active" : ""}`}
            onClick={() => setActiveSegment("budget")}
          >
            <h3>Budget</h3>
          </div>
        </div>

        {/* Content for the active segment */}
        <div className="content">
          {activeSegment === "cashflow" ? (
            <div className="cashflow-content active">
              <div className="content-item">
                <p className="income-text">Income</p>
                <p className="amount">
                  {formatCurrency(totalIncome, currency)}
                </p>
              </div>
              <div className="content-item">
                <p className="expenses-text">Expenses</p>
                <p className="amount">
                  {formatCurrency(totalExpenses, currency)}
                </p>
              </div>
            </div>
          ) : (
            <div className="budget-content active">
              {budgets.length === 0 ? (
                <p>No active budgets</p>
              ) : (
                budgets.map((budget) => {
                  const remaining = budget.amountAllocated - budget.amountSpent;
                  const remainingColor = remaining >= 0 ? "#4ECC5A" : "#EE3535";

                  return (
                    <div key={budget.id} className="budget-item">
                      {/* Budget Name */}
                      <p className="budget-name">{budget.name}</p>

                      {/* Amount Left with Right-Aligned Value */}
                      <div className="amount-row">
                        <p className="amount-left-label">Amount Left:</p>
                        <p
                          className="amount-value"
                          style={{ color: remainingColor }}
                        >
                          {remaining < 0 ? "-" : ""}
                          {formatCurrency(Math.abs(remaining), currency)}
                          {/* Use formatCurrency */}
                        </p>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}
        </div>
      </div>

      {/* Categories Card */}
      <div className="card categories-card">
        <h3>Categories</h3>

        {/* Progress Bar */}
        <div className="progress-bar single-bar">
          {/* Only show progress bar if transactions are available */}
          {transactions.length === 0 ? (
            <div
              className="progress-segment"
              style={{
                width: "100%", // Full width progress bar (but empty)
                backgroundColor: "#ccc", // Light gray to indicate no data
              }}
            ></div>
          ) : (
            categoryTotals.map((category) => (
              <div
                key={category.id}
                className="progress-segment"
                style={{
                  width: `${category.percentage}%`,
                  backgroundColor: category.color,
                  minWidth:
                    category.percentage > 0 ? `${category.percentage}%` : "1px", // Ensure visibility even for 0%
                }}
              ></div>
            ))
          )}
        </div>

        {/* Categories Grid */}
        <div className="categories-grid">
          {categoryTotals.map((category) => (
            <div key={category.id} className="category-item">
              {/* Color circle and category name */}
              <div className="category-header">
                <div
                  className="color-circle"
                  style={{
                    backgroundColor: category.color, // Always show the category color
                  }}
                ></div>
                <p className="category-name">{category.name}</p>
              </div>
              {/* Percentage underneath the category */}
              <p className="percentage">
                {transactions.length === 0
                  ? "0%"
                  : category.percentage.toFixed(0) + "%"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardCards;
