
import 'react-tabs/style/react-tabs.css';

import './App.css';

// MSAL imports
import { MsalProvider } from "@azure/msal-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Protected } from "./pages/Protected";
import NavBar from './auth/NavBar';


function App({ pca }) {

  return (
    <Router >
      <MsalProvider instance={pca}>
        <NavBar />
        <Pages />
      </MsalProvider>
    </Router>
  );
}

function Pages() {
  return (
    <Routes >
      <Route path="/protected" element={<Protected />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App;
