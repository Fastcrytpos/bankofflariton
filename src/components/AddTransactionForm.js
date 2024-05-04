
import React,{useState} from "react";
import axios from "axios";


function AddTransactionForm({setFilteredTransactions}) {


const[formData,setFormData]=useState({
  amount:0,
  category:"",
  date:"",
  description:"",
  
})

function handleChange(e) {
  const { name, value } = e.target;
  setFormData(prevFormData => ({
    ...prevFormData,
    [name]: value 
  }));
}


function handleAdd(e){
  console.log(formData)
  setFilteredTransactions(p=>([...p,formData]))
  axios
    .post("http://localhost:8001/transactions",formData)
    .then(res=>console.log("successfully posted transaction",res.data))
    .catch(err=>console.log("failed to post transaction",err))

  e.preventDefault();
}
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleAdd}>
        <div className="inline fields">
          <input type="date" name="date" value={formData.date} onChange={(e)=>{handleChange(e)}}/>
          <input type="text" name="description" value={formData.description} placeholder="Description" onChange={(e)=>{handleChange(e)}}/>
          <input type="text" name="category" value={formData.category} placeholder="Category" onChange={(e)=>{handleChange(e)}}/>
          <input type="number" name="amount" value={formData.amount} placeholder="Amount" step="0.01" onChange={(e)=>{handleChange(e)}}/>
        </div>
        <p>{formData.description}</p>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
        
      </form>
    </div>
  );
}

export default AddTransactionForm;
