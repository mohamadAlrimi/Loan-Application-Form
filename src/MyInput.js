import { useContext } from "react"
import { LoanInputContext } from "./context/LoanFormInputContext"
export default function MyInput(){
    const inputContext = useContext(LoanInputContext)
    return (<> <label>{inputContext.labelTitle}</label>
        <input value={inputContext.value} onChange={(event)=>{
            inputContext.handleChange( event.target.value)
        }} ></input></>)
}