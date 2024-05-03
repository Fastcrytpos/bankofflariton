import React, { useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({ transactions }) {
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  function searchItem(query) {
    const filteredData = transactions.filter((item) => {
      const lowerCaseQuery = query.toLowerCase();
      return (
        item.description.toLowerCase().includes(lowerCaseQuery) ||
        item.date.toLowerCase().includes(lowerCaseQuery) ||
        item.category.toLowerCase().includes(lowerCaseQuery) ||
        item.amount.toString().includes(lowerCaseQuery)
      );
    });
    setFilteredTransactions(filteredData);
  }

  return (
    <div>
      <Search searchItem={searchItem} />
      <AddTransactionForm />
      <TransactionsList transactions={filteredTransactions} />
    </div>
  );
}

export default AccountContainer;
