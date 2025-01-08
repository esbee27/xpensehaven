import React from "react";
import TransactionTable from "./TransactionTable";

function RecentTransactions({ transactions }) {
  const recentTransactions = transactions.slice(0, 5); // Assuming showing top 5 recent

  return (
    <div className="recent-transactions">
      <h2>Recent Transactions</h2>
      <TransactionTable transactions={recentTransactions} />
      <button className="btn">View All Transactions</button>
    </div>
  );
}

export default RecentTransactions;
