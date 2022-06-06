import React from 'react'
import { useState } from 'react'
import axios from "axios";
import DocViewer from './DocViewer';
import '../App.css'


function DocGetter({ endpoint }) {

    const [docs, setDocs] = useState([]);

    function getDocs() {
        console.log('getting from ' + endpoint)
        // axios
        //     .get(url)
        //     .then(res => {
        //         console.log(res.data)
        //         setDocs(res.data);
        //     });
    }

    return (
        <div >
            <button onClick={getDocs}>Reload</button>
            <hr />
            <DocViewer docs={docs} />
        </div >
    )
}

export default DocGetter;
