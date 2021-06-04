// Dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import "./App.css";

// Application & Routes
function App() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Books />
            </Route>
            <Route exact path="/books">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
}

export default App;
