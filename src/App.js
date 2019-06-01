import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Prof from "./pages/Profile";
import SignIn from "./pages/signIn";
import signUp from "./pages/signup";
import createChallenge from "./pages/CreateChallenge";

function App() {
  return (
    
    <Router>
      <div>
      <h1 className="title">Game Point</h1>
        <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/prof" component={Prof} />
          <Route exact path="/signup" component={signUp} />
          <Route exact path="/createChallenge" component={createChallenge} />
      </div>
     
    </Router>
  );
}

export default App;


