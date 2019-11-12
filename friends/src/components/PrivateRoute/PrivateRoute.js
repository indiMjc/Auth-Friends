import React from "react";
import { Route, Redirect } from "react-router-dom";

const isAuthenticated = () => {
  return sessionStorage.getItem("token");
};

const PrivateRoute = ({ children, ...rest }) => {
  console.log("...rest", rest);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
