import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import './App.css';
import DocProposalCreator from './components/DocProposalCreator';

function handleNewProposal() {
  console.log("dsdsafdsf")
}

function App() {
  return (
    <div className="App">
      <h2>Documents</h2>
      
  <br/><br/><hr/><br/><br/>

      <h2>Proposals</h2>
      <Tabs>
    <TabList>
      <Tab>Add</Tab>
      <Tab>View</Tab>
      {/* <Tab>Sign</Tab> */}
    </TabList>

    <TabPanel>
      <DocProposalCreator handleSubmit={handleNewProposal}/>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    {/* <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel> */}
  </Tabs>

  
    </div>
  );
}

export default App;
