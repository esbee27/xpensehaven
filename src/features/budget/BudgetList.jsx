import React from "react";

function BudgetList({ budgets, onEdit, onDelete }) {
  return (
    <table className="budget-list">
      <thead>
        <tr>
          <th>Budget Name</th>
          <th>Allocated Amount</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {budgets.map((budget) => (
          <tr key={budget.id}>
            <td>{budget.budgetName}</td>
            <td>{budget.allocatedAmount}</td>
            <td>{budget.startDate}</td>
            <td>{budget.endDate}</td>
            <td>{budget.status}</td>
            <td>
              <button onClick={() => onEdit(budget.id)}>Edit</button>
              <button onClick={() => onDelete(budget.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BudgetList;
