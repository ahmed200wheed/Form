import "./FormStyles.css"
export default
function Modal({isVisable,errorMessage="null"}){
    if (isVisable){
        return(
        <div id="modal">
            <div id="modal-content">
                <h1 style={{color:errorMessage? "red" : "green"}}>
                    {
                        errorMessage != null 
                        ? errorMessage 
                        :"The Form Has Been submitted Successfully"
                    }
                </h1>
            </div>
        </div>
    )
    }else{
        return(
            <></>
        )
    }
    
}