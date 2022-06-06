import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from "axios";
import { useState } from 'react'

import './App.css';
import ProposalCreator from './components/ProposalCreator';
import ProposalGetter from './components/ProposalGetter';
import ToSignGetter from './components/ToSignGetter'
import DocGetter from './components/DocGetter';

const endpoint = 'http://localhost:8077'


function App() {
  const [userID, setUserID] = useState('testuser');

  const [docCategory, setDocCategory] = useState('general');
  const [docName, setDocName] = useState('');

  function handleNewProposal(formData) {
    formData.append("userID", userID);
    let docName = formData.get("docName");
    axios.put(endpoint + "/api/proposals/" + docName,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then(response => {
        // alert("proposal created");
        return response.data;
      })
      .catch(error => {
        let message = error.response.data.error;
        console.log(message);
        alert(message);
      })
  }

  function handleSign(proposalID) {
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
      <p>User: </p><div className="gap"></div><input type="text" id="userID" className="input" defaultValue={userID} onChange={() => {
        const userInput = document.getElementById("userID").value;
        setUserID(userInput);
      }} ></input>
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
          <ToSignGetter user={userID} endpoint={endpoint + "/api/proposals"} handleSign={handleSign} />
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
          <DocGetter endpoint={endpoint + "/api/doc?author=" + userID} />
        </TabPanel>
        <TabPanel >
          <DocGetter endpoint={endpoint + "/api/doc?signer=" + userID} />
        </TabPanel>
        <TabPanel >
          <p>Category: </p><div className="gap"></div><input type="text" id="docCategory" className="input" defaultValue={docCategory} onChange={() => {
            const userInput = document.getElementById("docCategory").value;
            setDocCategory(userInput);
          }} ></input>
          <p></p>
          <p>Document Name: </p><div className="gap"></div><input type="text" id="docName" className="input" onChange={() => {
            const userInput = document.getElementById("docName").value;
            setDocName(userInput);
          }} ></input>
          <p></p>
          <DocGetter endpoint={endpoint + "/api/doc/" + docCategory + "/" + docName} />
        </TabPanel>
      </Tabs>

      <br /><br /><hr />


    </div>
  );
}

export default App;
