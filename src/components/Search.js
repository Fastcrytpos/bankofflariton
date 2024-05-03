import React from "react";

function Search({ searchItem }) {

  

  const handleChange = (e) => {
    const newValue = e.target.value.toLowerCase();
    searchItem(newValue);
    
  };

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleChange}
      />
      <i className="circular search link icon"></i>
      
    </div>
  );
}

export default Search;
