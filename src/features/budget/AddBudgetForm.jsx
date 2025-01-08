import React, { useState } from "react";

function AddBudgetForm({ onAddBudget }) {
  const [budgetName, setBudgetName] = useState("");
  const [allocatedAmount, setAllocatedAmount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleAddBudget = (e) => {
    e.preventDefault();
    const budgetData = {
      budgetName,
      allocatedAmount,
      startDate,
      endDate,
    };
    onAddBudget(budgetData);
  };

  return (
    <div className="add-budget-form">
      <form onSubmit={handleAddBudget}>
        <div className="form-group">
          <label htmlFor="budgetName">Budget Name</label>
          <input
            type="text"
            id="budgetName"
            className="form-control"
            value={budgetName}
            onChange={(e) => setBudgetName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="allocatedAmount">Allocated Amount</label>
          <input
            type="number"
            id="allocatedAmount"
            className="form-control"
            value={allocatedAmount}
            onChange={(e) => setAllocatedAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            className="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">
          Add Budget
        </button>
      </form>
    </div>
  );
}

export default AddBudgetForm;
