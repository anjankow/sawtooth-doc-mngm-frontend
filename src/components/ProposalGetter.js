import React from 'react'
import { useState } from 'react'
import axios from "axios";
import ProposalViewer from './ProposalViewer';
import '../App.css'


function ProposalGetter({ user, endpoint }) {

    const [docs, setDocs] = useState([{ name: "id1", category: "general", proposalID: "asdasdads", content: "xx" }, { name: "id1", category: "other", proposalID: "ppppp", content: "alabaster" }]);
    const url = endpoint

    function getDocs() {
        const address = url + '?userID=' + user;
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
            <ProposalViewer docs={docs} />
        </div >
    )
}

export default ProposalGetter;
