import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Prof from "./pages/Profile";
import Sign from "./pages/sign";

function App() {
  return (
    
    <Router>
      <div>
      <h1 className="title">Game Point</h1>
        <Route exact path="/sign" component={Sign} />
          <Route exact path="/prof" component={Prof} />
         
        
      </div>
     
    </Router>
  );
}

export default App;


