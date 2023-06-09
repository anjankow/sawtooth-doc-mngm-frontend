import React from 'react'
import '../App.css'

function ToSignViewer({ docs, handleSignProposal, user }) {
    return (
        <div className="ToSignViewer">
            <table className="table">
                <thead>
                    <tr>
                        <th>Doc Name</th>
                        <th>Category</th>
                        <th>Content</th>
                        <th>Proposed Status</th>
                        <th>Author</th>
                        <th>Signed by</th>
                        <th>Sign</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        docs.map((doc) => <tr key={doc.proposalID} className={doc.signers.includes(user) ? "SignedByUser" : "NotSignedByUser"}>
                            <td>{doc.name}</td>
                            <td>{doc.category}</td>
                            <td>{doc.content}</td>
                            <td>{doc.proposedStatus}</td>
                            <td>{doc.author}</td>
                            <td>{doc.signers}</td>
                            <td>
                                <button onClick={() => { handleSignProposal(doc.proposalID) }}>X</button>
                            </td>
                        </tr>)}
                </tbody>
            </table>
        </div >
    )
}

export default ToSignViewer;
