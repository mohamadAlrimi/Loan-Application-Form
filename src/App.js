import logo from './logo.svg';
import './App.css';
import LoanForm from './LoanForm';
import { UserContext } from './context/UserContext';

function App() {
  return (
    <UserContext.Provider value={{username :"muhammed" , name:"Muhammed Elrimi" , email:"muhammed12334.gmail.com"}}> <div className="App" style={{marginTop:"250px"}}>
    <LoanForm/>
    {/* this is commit  */}
    {/* this is commit  */}
    {/* this is commit  */}
    
    
  
      
    {/* this is commit  */}
    </div>   </UserContext.Provider>
   
  );
}

export default App;
