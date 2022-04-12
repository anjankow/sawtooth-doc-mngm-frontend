import React from 'react'
import { useState } from 'react'
import axios from "axios";
import DocViewer from './DocViewer';
import '../App.css'


function DocGetter({ endpoint }) {

    const [docs, setDocs] = useState([{ID: "id1", version: "v1", file: "xx"}, {ID: "id1", version: "v2", file: "dd"}, {ID: "id2", version: "v1", file: "sad"}]);

    axios
        .get(endpoint + "/api/documents")
        .then(res => {
            setDocs({
            res
            });
            console.log(res);
        });
    return (
        <div className="Tab">
            <DocViewer docs={docs}/>
        </div >
    )
}

export default DocGetter;
