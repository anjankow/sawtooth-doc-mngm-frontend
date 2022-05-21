import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from "axios";
import { useState } from 'react'

import './App.css';
import ProposalCreator from './components/ProposalCreator';
import ProposalGetter from './components/ProposalGetter';
import ToSignGetter from './components/ToSignGetter'

const endpoint = 'http://localhost:8077'


function App() {
  const [userID, setUserID] = useState('testuser');

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
        alert("proposal created");
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
  }


  return (
    <div className="App">
      <h2>Documents</h2>
      {/* my docs */}
      {/* signed by me */}
      {/* docsearch */}

      <br /><br /><hr /><br /><br />

      <h2>Proposals</h2>

      <Tabs>
        <TabList>
          <Tab>My</Tab>
          <Tab>To sign</Tab>
        </TabList>

        <TabPanel >
          <p>User: </p><div className="gap"></div><input type="text" id="userID" className="input" defaultValue={userID} onChange={() => {
            const userInput = document.getElementById("userID").value;
            setUserID(userInput);
          }} ></input>
          <p></p>
          <ProposalGetter user={userID} endpoint={endpoint + "/api/proposals"} />
          <ProposalCreator handleSubmit={handleNewProposal} />
        </TabPanel>

        <TabPanel >
          <ToSignGetter user={userID} endpoint={endpoint + "/api/proposals"} handleSign={handleSign} />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
