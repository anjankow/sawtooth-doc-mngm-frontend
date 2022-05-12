import React from 'react'
import '../App.css'

function ProposalViewer({ docs }) {

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Doc Name</th>
                        <th>Category</th>
                        <th>Version</th>
                        <th>File</th>
                    </tr>
                </thead>
                <tbody>
                    {docs.map((doc) => <tr key={doc.name + ';' + doc.category}>
                        <td>{doc.name}</td>
                        <td>{doc.category}</td>
                        <td>{doc.version}</td>
                        <td>{doc.file}</td>
                    </tr>)}
                </tbody>
            </table>


        </div >
    )
}

export default ProposalViewer;
