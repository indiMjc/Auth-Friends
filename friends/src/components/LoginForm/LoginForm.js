import React, { useState, useEffect } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  console.log("console.log output: LoginForm -> username", username);
  const [password, setPassword] = useState("");
  console.log("console.log output: LoginForm -> password", password);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  handleUserChange = e => {
    setUsername(e.target.value);
  };

  handlePWChange = e => {
    setPassword(e.target.value);
  };

  login = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/login`, { username, password })
      .then(res => {
        console.log("response", res);
        const { data } = res;

        sessionStorage.setItem("token", data.payload);
        setIsLoggedIn(true);
      });
  };

  useEffect(() => {
    sessionStorage.getItem("token")
      ? setIsLoggedIn(true)
      : setIsLoggedIn(false);
  }, []);

  return (
    <div className="login-form">
      <h1>{isLoggedIn ? "LOGGED IN!" : "PLEASE LOG IN"}</h1>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUserChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePWChange}
        />
      </form>
    </div>
  );
};

export default LoginForm;
