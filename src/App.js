import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Images } from "./Components/Images";
import { Contact } from "./Components/Contact";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";

export const App = () => {
  return (
    <Router>
      <div className="hello">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Images">
            <Images />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/Navbar">
            <Navbar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
