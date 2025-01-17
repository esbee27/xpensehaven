import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import DashboardNav from "../components/DashboardComponents/DashboardNav";
import BudgetForm from "../components/BudgetForm";
import "./BudgetPage.css";

function BudgetPage() {
  const [budgets, setBudgets] = useState([]);
  const [showAddBudgetForm, setShowAddBudgetForm] = useState(false);
  const [categories, setCategories] = useState([
    // Hardcoded for testing purposes
    { name: "Food", color: "#C34AEB" },
    { name: "Subscriptions", color: "#C32A81" },
    { name: "Transportation", color: "#5CEB1B" },
    { name: "Utilities", color: "#E3A576" },
    { name: "Miscellaneous", color: "#C2B6B6" },
  ]);
  const [editBudget, setEditBudget] = useState(null);
  const [activeHeader, setActiveHeader] = useState("Day");

  const toggleForm = (budget = null) => {
    setEditBudget(budget);
    setShowAddBudgetForm(!showAddBudgetForm);
  };

  const handleFormSubmit = (budgetData) => {
    if (editBudget) {
      setBudgets((prev) =>
        prev.map((b) => (b.id === editBudget.id ? { ...b, ...budgetData } : b))
      );
      alert("Budget updated successfully!");
    } else {
      const newBudget = {
        id: Date.now(),
        ...budgetData,
      };
      setBudgets((prev) => [...prev, newBudget]);
      alert("Budget added successfully!");
    }
    toggleForm();
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this budget?")) {
      setBudgets((prev) => prev.filter((b) => b.id !== id));
      alert("Budget deleted successfully!");
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(2);
    return `${day}-${month}-${year}`;
  };

  return (
    <>
      <DashboardNav />
      <div className="budget-page">
        <div className="budget-header-container">
          <div className="time-periods">
            {["Day", "Week", "Month", "Year"].map((period) => (
              <button
                key={period}
                className={activeHeader === period ? "active" : ""}
                onClick={() => setActiveHeader(period)}
              >
                {period}
                {period === "Year" && <FaCaretDown />}
              </button>
            ))}
          </div>

          <button className="add-budget-btn" onClick={() => toggleForm()}>
            Add Budget
          </button>

          {showAddBudgetForm && (
            <div className="budget-form-container">
              <BudgetForm
                categories={categories}
                budget={editBudget}
                onSubmit={handleFormSubmit}
                onCancel={() => toggleForm()}
              />
            </div>
          )}
        </div>

        <div className="budget-table">
          <table>
            <thead>
              <tr>
                <th>Budget ID</th>
                <th>Budget Name</th>
                <th>Amount Allocated</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {budgets.map((budget) => (
                <tr key={budget.id}>
                  <td>{budget.id}</td>
                  <td>{budget.budgetName}</td>
                  <td>{budget.amountAllocated}</td>
                  <td>{formatDate(budget.startDate)}</td>
                  <td>{formatDate(budget.endDate)}</td>
                  <td>
                    <button onClick={() => toggleForm(budget)}>Edit</button>
                    <button onClick={() => handleDelete(budget.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default BudgetPage;
