import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/protected">Privileged content</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/login" />
      </Switch>
    </div>
  );
}

export default App;
