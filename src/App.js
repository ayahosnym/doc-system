import React from "react";
import Axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Update from "./components/Update/Update";
import Home from "./components/Home/Home";
import "./App.less";

Axios.defaults.baseURL = "http://localhost:3000";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/update/:id" component={Update} />
        </Switch>
      </Router>
    </div>
  );
}
