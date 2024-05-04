import React, {useState} from "react";

function Search({ searchItem }) {

  const [query,setQuery] = useState("")

  function handleChange(e){
   
  const newQuery = e.target.value.toLowerCase(); 
  setQuery(p=>newQuery); 
  searchItem(newQuery); 
  console.log(newQuery);
    
  };

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        value={query}
        placeholder="Search your Recent Transactions"
        onChange={(e)=>handleChange(e)}
      />
      <i className="circular search link icon"></i>
      
    </div>
  );
}

export default Search;
