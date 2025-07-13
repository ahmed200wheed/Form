import "./FormStyles.css"
import Modal from "./Modal"
import { useState } from "react"
export default
function LoanForm(){
    const[errorMessage,setErrorMessage]=useState(null)
    const[showModal , setShowModal] = useState(false)
    const[loanInputs,setLoanInputs]= useState({
        name:"",
        PhoneNumper:"",
        age:"",
        isEmployee: false,
        salaryRange:"",
    })
    function handleFormSubmit(event){
        event.preventDefault();
        setErrorMessage(null)
        let {age , PhoneNumper} = loanInputs;
        if(age <18 || age > 100 ){
            setErrorMessage("The age is not Allowed")
        }else if (PhoneNumper.length <10 || PhoneNumper.length>12 ){
            setErrorMessage("Phone Numper Format Is Incorrect")
        }
        setShowModal(true)
    }
    const btnDisabled = 
        loanInputs.name =="" ||
        loanInputs.PhoneNumper =="" ||
        loanInputs.age ==""
    
    return(
        <div onClick={()=> {
            if (showModal){
                setShowModal(false)
            }
        }} className="flex" style={{flexDirection:"column"}}>
            <form id="loan-form" className="flex" style={{flexDirection:"column"}}>
                <h1>Requesting a Loan</h1>
                <hr></hr>

                <label>name:</label>
                <input value={loanInputs.name} onChange={(event)=>{
                    setLoanInputs({...loanInputs,name:event.target.value})
                }}/>

                <label>Phone Numper:</label>
                <input type="number" value={loanInputs.PhoneNumper} onChange={(event)=>{
                    setLoanInputs({...loanInputs,PhoneNumper:event.target.value})
                }}/>

                <label>Age:</label>
                <input type="number" value={loanInputs.age} onChange={(event)=>{
                    setLoanInputs({...loanInputs,age:event.target.value})
                }}/>

                <label style={{marginTop:"30px"}}>Are you an employee?</label>
                <input type="checkbox" checked={loanInputs.isEmployee} onChange={(event)=>{
                    setLoanInputs({...loanInputs,isEmployee:event.target.checked})
                }}/>

                <label>Salary</label>
                <select value={loanInputs.salaryRange} onChange={(event)=>{
                    setLoanInputs({...loanInputs,salaryRange:event.target.value})
                }}>
                    <option>Less Than 500$</option>
                    <option>between 500$ and 2000$</option>
                    <option>above 2000$</option>
                </select>

                <button id="submit-loan-button" 
                className={btnDisabled ? "disabled" : ""}
                onClick={handleFormSubmit}
                disabled={btnDisabled}
                >Submit</button>
            </form>
            <Modal errorMessage={errorMessage} isVisable={showModal}/>
        </div>
    )
}