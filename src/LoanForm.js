
import "./FormStyles.css" 
import Modle from "./Modal"
import { useState } from "react"
export default function LoanForm(){
    const[loanInputs,setLonaInputs   ]=useState({
        name:"",
        phoneNumber:"",
        age:"",
        isemployee :"false",
        salaryRange:"",
    })
    function handlFormSubmit(event){
        event.preventDefault();
        alert("hello")

    }
    const btnIsDisabled = loanInputs.name === "" || loanInputs.age === "" || loanInputs.phoneNumber === "";
    return(<div className="flex" style={{flexDirection:"column"}}>
    <form  id="loan-form"className="flex" style={{flexDirection:"column"}}>
        <h1>Requesting a Loan </h1>
       <hr/>
        <label>Name:</label>
        <input value={loanInputs.name} onChange={(event)=>{
            setLonaInputs({...loanInputs , name : event.target.value})
        }} ></input>
        <label>Phone Number:</label>
        <input value={loanInputs.phoneNumber} onChange={(event)=>{
            setLonaInputs({...loanInputs , phoneNumber : event.target.value})
        }} ></input>
        <label>Age:</label>
        <input value={loanInputs.age} onChange={(event)=>{
            setLonaInputs({...loanInputs , age : event.target.value})
        }} ></input>
        <label style={{marginTop:"30px"}}>Are you an employee?</label> <br></br>
        <input type="checkbox" value={loanInputs.isemployee} onChange={(event)=>{
            setLonaInputs({...loanInputs , isemployee : event.target.checked})
        }}  /> <br/>
        <label>Salary:</label>
       <select value={loanInputs.salaryRange} onChange={(event)=>{
            setLonaInputs({...loanInputs , salaryRange : event.target.value})
        }} >
        <option>less than 500$</option>
        <option>between 500$ and 2000$</option>
        <option>above 2000$</option>
       </select>
        <button onClick={handlFormSubmit} className={btnIsDisabled ? "disabled" : ""} disabled={btnIsDisabled} id="submit-loan-btn">Submit</button>
 
        </form>
        {/* <Modle/> */}
        </div>)
}