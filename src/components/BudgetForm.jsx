import React, { useState, useEffect } from "react";
import "./BudgetForm.css";

function BudgetForm({ budget, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    budgetName: budget ? budget.budgetName : "", // Default to empty string if not editing
    amountAllocated: budget ? budget.amountAllocated : "",
    startDate: budget ? budget.startDate : "",
    endDate: budget ? budget.endDate : "",
  });

  // Populate form when editing
  useEffect(() => {
    if (budget) {
      setFormData({
        ...budget,
        amountAllocated: budget.amountAllocated
          ? String(budget.amountAllocated)
          : "",
      });
    } else {
      // Reset form data for new budgets
      setFormData({
        budgetName: "",
        amountAllocated: "",
        startDate: "",
        endDate: "",
      });
    }
  }, [budget]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.budgetName &&
      formData.amountAllocated &&
      formData.startDate &&
      formData.endDate
    ) {
      onSubmit(formData);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="budget-form">
      <h3>{budget ? "Edit Budget" : "New Budget"}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Budget Name:
          <input
            type="text"
            name="budgetName"
            value={formData.budgetName}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Amount Allocated:
          <input
            type="number"
            name="amountAllocated"
            value={formData.amountAllocated}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
            required
          />
        </label>

        <div className="form-buttons">
          <button type="submit">{budget ? "Update" : "Save"}</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default BudgetForm;
