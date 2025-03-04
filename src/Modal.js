import "./FormStyles.css"
export default function Modle({isVisible , errorMessage=null}){
   if(isVisible){
    return(<div id="modal"><div id="modal-content">
        {/* <h1>The Form Has Been Submitted Successfully</h1> */}
        {/* <h1>The Form Has Been Submitted Successfully</h1> */}
        {/* <h1>The Form Has Been Submitted Successfully</h1> */}
        <h1 style={{color : errorMessage ? "red" : "green"}}>{errorMessage != null ? errorMessage : "The Form Has Been Submitted Successfully"}</h1>
    
        </div></div>);

   }
   else {
    return <></>
   }
}