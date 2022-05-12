import React from 'react'
import { useState } from 'react'
import axios from "axios";
import ProposalViewer from './ProposalViewer';
import '../App.css'


function ProposalGetter({ endpoint }) {

    const [docs, setDocs] = useState([{ name: "id1", category: "general", version: "v1", file: "xx" }, { name: "id2", category: "general", version: "v2", file: "dd" }, { name: "id3", category: "other", version: "v1", file: "sad" }]);
    const url = endpoint

    function getDocs() {
        const userID = document.getElementById("userID").value;
        const address = url + '?userID=' + userID;
        console.log(address)
        axios
            .get(address)
            .then(res => {
                setDocs({
                    res
                });
                console.log(res);
            });
    }

    return (
        <div className="Tab">
            {/* tmp  */}
            <p>User: </p><div className="gap"></div><input type="text" id="userID" className="input" ></input>
            <button onClick={getDocs}>Reload</button>
            <ProposalViewer docs={docs} />
        </div >
    )
}

export default ProposalGetter;
