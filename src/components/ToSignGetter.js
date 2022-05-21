import React from 'react'
import { useState } from 'react'
import axios from "axios";
import ToSignViewer from './ToSignViewer';
import '../App.css'


function ToSignGetter({ user, endpoint, handleSign }) {

    const [docs, setDocs] = useState([{ name: "id1", category: "general", proposalID: "asdasdads", content: "xx", signers: "koteczek" }, { name: "id1", category: "other", proposalID: "ppppp", content: "alabaster", signers: "testuser,koteczek" }]);
    const url = endpoint

    function getDocs() {
        const address = url + '?userID=!' + user;
        console.log(address)
        axios
            .get(address)
            .then(res => {
                console.log(res.data)
                setDocs(res.data);
            });
    }

    return (
        <div className="Tab">
            <button onClick={getDocs}>Reload</button>
            <p></p>
            <ToSignViewer user={user} docs={docs} handleSign={handleSign} />
        </div >
    )
}

export default ToSignGetter;
