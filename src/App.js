import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Cv from "./components/Cv";
import Porfolio from "./components/Porfolio";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cv" component={Cv} />
          <Route path="/portfolio" component={Porfolio} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
