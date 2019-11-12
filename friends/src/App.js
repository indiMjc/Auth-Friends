import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

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
        <PrivateRoute path="/protected">
          <h1>sensitive data</h1>
        </PrivateRoute>
        <Route path="/login" component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
