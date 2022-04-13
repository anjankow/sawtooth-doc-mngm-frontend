import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from "axios";

import './App.css';
import DocProposalCreator from './components/DocProposalCreator';
import DocGetter from './components/DocGetter';

const endpoint = 'http://localhost:8077'
const userID = 'testuser'

function handleNewProposal(formData) {
  // userID should be get from the cookie instead (?)
  let userID = formData.get("userID");
  formData.delete("userID");
  axios.put(endpoint + "/api/proposals/" + userID, 
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
      
  <br/><br/><hr/><br/><br/>

      <h2>My Proposals</h2>
      <Tabs>
    <TabList>
      <Tab>Add</Tab>
      <Tab>View</Tab>
      {/* <Tab>Sign</Tab> */}
    </TabList>

    <TabPanel >
      <DocProposalCreator handleSubmit={handleNewProposal}/>
    </TabPanel>
    <TabPanel >
      <DocGetter endpoint={endpoint + "/api/proposals/" + userID}/>
    </TabPanel>
    {/* <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel> */}
  </Tabs>
    </div>
  );
}

export default App;
