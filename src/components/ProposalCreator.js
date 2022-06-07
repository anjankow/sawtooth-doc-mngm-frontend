import React from 'react'
import '../App.css'


function preHandleSubmit(handleSubmit) {
    var data = new FormData();
    const file = document.getElementById("docFile").files[0];
    const docName = document.getElementById("docName").value;
    const category = document.getElementById("category").value;
    const removeDoc = document.getElementById("removeDoc").checked;

    data.append("docFile", file)
    data.append("category", category)
    data.append("docName", docName)
    if (removeDoc) {
        data.append("docStatus", "removed")
    }

    data.forEach((val, key) => console.log(key + " " + val));

    var errorMsg = ""
    if (docName === "") {
        errorMsg += "enter doc name; "
    }

    let fileChosen = !(file === null || file === undefined)
    if (removeDoc && fileChosen) {
        errorMsg += "when removing a file, no file can be selected; "
    }
    if (!removeDoc && !fileChosen) {
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
        <div className="ProposalCreator">
            <h4>Create a new proposal</h4>
            <form onSubmit={() => { preHandleSubmit(handleSubmit) }}>

                <div className="flex-row">
                    <p>Document ID: </p><div className="gap"></div><input type="text" id="docName" className="input"></input>
                </div>
                <div className="flex-row">
                    <p>Category: </p><div className="gap"></div><input type="text" id="category" className="input" defaultValue="general"></input>
                </div>
                <div className="flex-row">
                    <p>Document file: </p><div className="gap"></div><input id="docFile" className="doc-input" type="file"></input>
                </div>

                <div className="flex-row">
                    <p>Remove this document: </p>
                    <input id="removeDoc" className="input" type="checkbox"></input>
                </div>


                <div className="gap"></div><input className="button" type="submit"></input>
            </form >
        </div >
    )
}

export default ProposalCreator
