import React, { useState, useEffect } from "react";
import AccountContainer from "./AccountContainer";
import axios from "axios";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8001/transactions")
      .then((res) => {
        console.log("successfully fetched data:", res.data);
        setTransactions(res.data);
      })
      .catch((err) => {
        console.log("failed to fetch data from server:", err);
      });
  }, []);

  


  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
     
      <AccountContainer  transactions={transactions} />
    </div>
  );
}

export default App;