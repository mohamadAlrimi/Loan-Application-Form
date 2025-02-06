import { useContext } from "react"
import { LoanInputContext } from "./context/LoanFormInputContext"
// import { UserContext } from "./context/UserContext"
export default function MyInput(){
    // const userData = useContext(UserContext)
    const inputContext = useContext(LoanInputContext)
    return (<> <label>  {inputContext.labelTitle}</label>
        <input value={inputContext.value} onChange={(event)=>{
            inputContext.handleChange( event.target.value)
        }} ></input></>)
}