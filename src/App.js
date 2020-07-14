import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MergeDisplayAndAdd from "./components/MergeDisplayAndAdd/MergeDisplayAndAdd";
import Update from "./components/Update/Update";
import "./App.less";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={MergeDisplayAndAdd} />
        <Route path="/update/:id" component={Update} />
      </Router>
    </div>
  );
}

export default App;
