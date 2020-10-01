import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Freelancers} from './pages/Freelancers';
import {Details} from './pages/Detais';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/freelancers">Freelancers</Link>
            </li>
          </ul>
          <hr />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/freelancers">
              <Freelancers />
            </Route>
            <Route path="/details">
              <Details />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
