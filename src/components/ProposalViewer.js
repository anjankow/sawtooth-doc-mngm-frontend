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
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                    {docs.map((doc) => <tr key={doc.proposalID}>
                        <td>{doc.name}</td>
                        <td>{doc.category}</td>
                        <td>{doc.content}</td>
                    </tr>)}
                </tbody>
            </table>
        </div >
    )
}

export default ProposalViewer;
