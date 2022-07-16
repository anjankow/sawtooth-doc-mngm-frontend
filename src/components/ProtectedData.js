import React from 'react'
import '../App.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import axios from "axios";
import { useState } from 'react'
import ProposalCreator from './ProposalCreator';
import ProposalGetter from './ProposalGetter';
import ToSignGetter from './ToSignGetter'
import DocGetter from './DocGetter';
import { backendAddr } from '../config';


function ProtectedData({ responseData }) {
    const endpoint = backendAddr;
    const accessToken = responseData.accessToken;
    const userID = responseData.account.localAccountId;
    console.log('accessToken')
    console.log(accessToken)
    console.log('userID')
    console.log(userID)

    axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;


    const [docCategory, setDocCategory] = useState('general');
    const [docVersionName, setDocVersionName] = useState('');


    function handleNewProposal(formData) {
        formData.append("userID", userID);
        let docName = formData.get("docName");
        let address = endpoint + "/api/proposals/" + docName;
        console.log('sending to ' + address)
        axios.put(address,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }).then(response => {
                alert("proposal created");
                console.log(response);
                return response.data;
            })
            .catch(error => {
                let message = error.response.data.error;
                console.log(message);
                alert(message);
            })
    }

    function handleSignProposal(proposalID) {
        console.log('signing ' + proposalID)
        let body = `{ "signer":"` + userID + `"}`
        console.log('body: ' + body)
        axios.post(endpoint + "/api/proposals/" + proposalID,
            body,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }).then(response => {
                // alert("proposal signed");
                return response.data;
            })
            .catch(error => {
                let message = error.response.data.error;
                console.log(message);
                alert(message);
            })
    }


    return (

        <div className="App">

            <p></p>


            <h2>Proposals</h2>

            <Tabs>
                <TabList>
                    <Tab>My</Tab>
                    <Tab>To sign</Tab>
                </TabList>

                <TabPanel >

                    <ProposalGetter user={userID} endpoint={endpoint + "/api/proposals"} />
                    <ProposalCreator handleSubmit={handleNewProposal} />
                </TabPanel>

                <TabPanel >
                    <ToSignGetter user={userID} endpoint={endpoint + "/api/proposals"} handleSignProposal={handleSignProposal} />
                </TabPanel>
            </Tabs>

            <br /><br /><hr /><br /><br />

            <h2>Documents</h2>
            <Tabs className="DocTabs">
                <TabList>
                    <Tab>My</Tab>
                    <Tab>Signed by me</Tab>
                    <Tab>Search</Tab>
                </TabList>
                <TabPanel  >
                    <DocGetter endpoint={endpoint + "/api/docs?author=" + userID} />
                </TabPanel>
                <TabPanel >
                    <DocGetter endpoint={endpoint + "/api/docs?signer=" + userID} />
                </TabPanel>
                <TabPanel >
                    <p>Category: </p><div className="gap"></div><input type="text" id="docCategory" className="input" defaultValue={docCategory} onChange={() => {
                        const userInput = document.getElementById("docCategory").value;
                        setDocCategory(userInput);
                    }} ></input>
                    <p></p>
                    <p>Document Name: </p><div className="gap"></div><input type="text" id="docVersionName" className="input" onChange={() => {
                        const userInput = document.getElementById("docVersionName").value;
                        setDocVersionName(userInput);
                    }} ></input>
                    <p></p>
                    <DocGetter endpoint={endpoint + "/api/docs/" + docCategory + "/" + docVersionName} />
                </TabPanel>
            </Tabs>

            <br /><br /><hr />


        </div>
    )
};


export default ProtectedData