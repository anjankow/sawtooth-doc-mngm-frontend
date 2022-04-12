import React from 'react'
import '../App.css'

function DocViewer({ docs }) {

    return (
        <div>
            <table className="table">
                <tr>
                    <th>Doc ID</th>
                    <th>Version</th>
                    <th>File</th>
                </tr>
                {docs.map((doc) => <tr>
                <td>{doc.ID}</td>
                <td>{doc.version}</td>
                <td>{doc.file}</td>
            </tr>)}
            </table>
            
            
        </div >
    )
}

export default DocViewer
