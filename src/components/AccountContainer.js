import React, {  useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({ transactions }) {
  const [filteredTransactions, setFilteredTransactions] = useState([...transactions]);

  function searchItem(query) {
    setFilteredTransactions(transactions.filter((item) => {
      
      return (
        item.description.toLowerCase().includes(query) ||
        item.date.includes(query) ||
         item.category.toLowerCase().includes(query) ||
         item.amount.toString().includes(query)
      );
    }))
    console.log("invoked")
  }

 

  return (
    <div>
      <Search searchItem={searchItem} />
      <AddTransactionForm filteredTransactions={filteredTransactions} setFilteredTransactions={setFilteredTransactions}/>
      <TransactionsList transactions={filteredTransactions.reverse()} />
    </div>
  );
}

export default AccountContainer;
