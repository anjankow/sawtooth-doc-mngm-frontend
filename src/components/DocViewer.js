import React from 'react'
import '../App.css'

function DocViewer({ docs }) {

    return (
        <div className="DocViewer">
            <table className="table">
                <thead>
                    <tr>
                        <th>Doc Name</th>
                        <th>Category</th>
                        <th>Version</th>
                        <th>Author</th>
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                    {docs.map((doc) => <tr key={doc.proposalID}>
                        <td>{doc.name}</td>
                        <td>{doc.category}</td>
                        <td>{doc.version}</td>
                        <td>{doc.author}</td>
                        <td>{doc.content}</td>
                    </tr>)}
                </tbody>
            </table>


        </div >
    )
}

export default DocViewer
