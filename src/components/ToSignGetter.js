import React from 'react'
import { useState } from 'react'
import axios from "axios";
import ToSignViewer from './ToSignViewer';
import '../App.css'


function ToSignGetter({ user, endpoint, handleSignProposal }) {

    const [docs, setDocs] = useState([]);
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
            <ToSignViewer user={user} docs={docs} handleSignProposal={handleSignProposal} />
        </div >
    )
}

export default ToSignGetter;
