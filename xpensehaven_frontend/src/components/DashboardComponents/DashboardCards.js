import React, { useState } from "react";
import { useCurrency } from "../../context/currencyContext"; // Use the Currency context
import { formatCurrency } from "../../utils/formatCurrency"; // Import the utility function
import { useGlobalContext } from "../../context/GlobalContext";
import "./DashboardCards.css";

function DashboardCards() {
  const { balance, cashFlow, budgets, categories } = useGlobalContext();
  const { currency } = useCurrency(); // Access the current currency
  const [activeSegment, setActiveSegment] = useState("cashflow");

  // Prevents 'undefined' errors when data is still loading
  if (!cashFlow || !Array.isArray(categories) || !Array.isArray(budgets)) {
    return <p>Loading...</p>;
  }

  return (
    <div className="dashboard-cards">
      {/* Total Balance Card */}
      <div className="card total-balance-card">
        <h3>Total Balance</h3>
        <p className="balance-placeholder">
          {formatCurrency(balance, currency)}
        </p>
      </div>

      {/* Cashflow and Budget Card */}
      <div className="card cashflow-budget-card">
        <div className="header-container">
          <div
            className={`header ${activeSegment === "cashflow" ? "active" : ""}`}
            onClick={() => setActiveSegment("cashflow")}
          >
            <h3>CashFlow</h3>
          </div>
          <div
            className={`header ${activeSegment === "budget" ? "active" : ""}`}
            onClick={() => setActiveSegment("budget")}
          >
            <h3>Budget</h3>
          </div>
        </div>

        <div className="content">
          {activeSegment === "cashflow" ? (
            <div className="cashflow-content active">
              <div className="content-item">
                <p className="income-text">Income</p>
                <p className="amount">
                  {formatCurrency(cashFlow.income, currency)}
                </p>
              </div>
              <div className="content-item">
                <p className="expenses-text">Expenses</p>
                <p className="amount">
                  {formatCurrency(cashFlow.expenses, currency)}
                </p>
              </div>
            </div>
          ) : (
            <div className="budget-content active">
              {budgets.length > 0 ? (
                budgets.slice(0, 2).map((budget) => (
                  <div key={budget.id} className="budget-item">
                    <p className="budget-name">{budget.name}</p>
                    <div className="amount-row">
                      <p className="amount-left-label">Amount Left:</p>
                      <p className="amount-value">
                        {formatCurrency(budget.amountLeft, currency)}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No active budgets</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardCards;
