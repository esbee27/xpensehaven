import React, { useState } from "react";

function TimeFilter({ onFilterChange }) {
  const [timeFilter, setTimeFilter] = useState("all");

  const handleFilterChange = (e) => {
    setTimeFilter(e.target.value);
    onFilterChange(e.target.value);
  };

  return (
    <div className="time-filter">
      <label htmlFor="timeFilter">Filter by Time</label>
      <select
        id="timeFilter"
        value={timeFilter}
        onChange={handleFilterChange}
        className="form-control"
      >
        <option value="all">All</option>
        <option value="day">Past Day</option>
        <option value="week">Past Week</option>
        <option value="month">Past Month</option>
      </select>
    </div>
  );
}

export default TimeFilter;
