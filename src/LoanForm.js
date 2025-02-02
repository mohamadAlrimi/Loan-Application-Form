
import "./FormStyles.css" 
import Modle from "./Modal"
export default function LoanForm(){
    return(<div className="flex" style={{flexDirection:"column"}}>
    <form  id="loan-form"className="flex" style={{flexDirection:"column"}}>
        <h1>Requesting a Loan </h1>
       <hr/>
        <label>Name:</label>
        <input ></input>
        <label>Phone Number:</label>
        <input ></input>
        <label>Age:</label>
        <input ></input>
        <label style={{marginTop:"30px"}}>Are you an employee?</label> <br></br>
        <input type="checkbox"/> <br/>
        <label>Salary:</label>
       <select>
        <option>less than 500$</option>
        <option>between 500$ and 2000$</option>
        <option>above 2000$</option>
       </select>
        <button id="submit-loan-btn">Submit</button>
 
        </form>
        {/* <Modle/> */}
        </div>)
}