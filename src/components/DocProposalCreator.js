import React from 'react'
import '../App.css'


function preHandleSubmit(handleSubmit) {
    var data = new FormData();
    const file = document.getElementById("docFile").files[0];
    const userID = document.getElementById("userID").value;
    const docID = document.getElementById("docID").value;

    data.append("docFile", file)
    data.append("userID", userID)
    data.append("docID", docID)
    
    data.forEach((val, key)=>console.log(key + " " + val));

    var errorMsg = ""
    if (userID === "") {
        errorMsg += "enter user ID; "
    }
    if (docID === "") {
        errorMsg += "enter doc ID; "
    }
    if (file === null || file === undefined) {
        errorMsg += "select a file; "
    }
    if (errorMsg !== "") {
        alert(errorMsg)
        return
    }
    
    handleSubmit(data);

}

function DocProposalCreator({ handleSubmit }) {

    return (
        <div className="Tab">
            <form onSubmit={()=>{preHandleSubmit(handleSubmit)}}>
            <div className="flex-row">
                <p>User ID: </p><div className="gap"></div><input type="text" id="userID" className="input"></input>
            </div>
            
            <div className="flex-row">
                <p>Document ID: </p><div className="gap"></div><input type="text" id="docID" className="input"></input>
            </div>
            <div className="flex-row">
                <p>Document file: </p><div className="gap"></div><input id="docFile" className="doc-input" type="file"></input>
            </div>
            <div className="gap"></div><input className="button" type="submit"></input>
            </form>
        </div >
    )
}

export default DocProposalCreator
