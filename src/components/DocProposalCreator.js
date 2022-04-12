import React from 'react'
import { useState } from 'react'
import './DocProposalCreator.css'

function DocProposalCreator({ handleSubmit }) {

    return (
        <div className="DocProposalCreator">
            <form onSubmit={handleSubmit}>
            <div className="flex-row">
                <p>Document ID: </p><div className="gap"></div><input id="docID" className="input"></input>
            </div>
            <div className="flex-row">
                <p>Document file: </p><div className="gap"></div><input id="docFile" className="doc-input" type="file"></input>
            </div>
            <div className="gap"></div><input className="button" type="submit"></input>
            </form>
        </div >
    )
}

export default DocProposalCreator
