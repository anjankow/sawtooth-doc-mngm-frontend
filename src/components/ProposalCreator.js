import React from 'react'
import '../App.css'


function preHandleSubmit(handleSubmit) {
    var data = new FormData();
    const file = document.getElementById("docFile").files[0];
    const userID = document.getElementById("userID").value;
    const docName = document.getElementById("docName").value;
    const category = document.getElementById("category").value;

    data.append("docFile", file)
    data.append("userID", userID)
    data.append("category", category)
    data.append("docName", docName)

    data.forEach((val, key) => console.log(key + " " + val));

    var errorMsg = ""
    if (userID === "") {
        errorMsg += "enter user ID; "
    }
    if (docName === "") {
        errorMsg += "enter doc name; "
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

function ProposalCreator({ handleSubmit }) {

    return (
        <div className="Tab">
            <form onSubmit={() => { preHandleSubmit(handleSubmit) }}>
                <div className="flex-row">
                    <p>User ID: </p><div className="gap"></div><input type="text" id="userID" className="input"></input>
                </div>

                <div className="flex-row">
                    <p>Document ID: </p><div className="gap"></div><input type="text" id="docName" className="input"></input>
                </div>
                <div className="flex-row">
                    <p>Category: </p><div className="gap"></div><input type="text" id="category" className="input" defaultValue="general"></input>
                </div>
                <div className="flex-row">
                    <p>Document file: </p><div className="gap"></div><input id="docFile" className="doc-input" type="file"></input>
                </div>
                <div className="gap"></div><input className="button" type="submit"></input>
            </form>
        </div >
    )
}

export default ProposalCreator
