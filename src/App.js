import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from "axios";

import './App.css';
import ProposalCreator from './components/ProposalCreator';
import ProposalGetter from './components/ProposalGetter';

const endpoint = 'http://localhost:8077'

function handleNewProposal(formData) {
  // userID should be read from the cookie instead (?)
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

function App() {
  return (
    <div className="App">
      <h2>Documents</h2>

      <br /><br /><hr /><br /><br />

      <h2>My Proposals</h2>

      <Tabs>
        <TabList>
          <Tab>Add</Tab>
          <Tab>View</Tab>
          {/* <Tab>Sign</Tab> */}
        </TabList>

        <TabPanel >
          <ProposalCreator handleSubmit={handleNewProposal} />
        </TabPanel>
        <TabPanel >
          <ProposalGetter endpoint={endpoint + "/api/proposals"} />
        </TabPanel>
        {/* <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel> */}
      </Tabs>
    </div>
  );
}

export default App;
