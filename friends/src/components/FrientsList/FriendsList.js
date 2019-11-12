import React, { useEffect } from "react";
import axios from "axios";

const axiosWithAuth = () => {
  return axios.create({
    headers: {
      authorization: sessionStorage.getItem("token")
    }
  });
};

const getData = () => {
  const authAxios = axiosWithAuth();
  authAxios.get(`http://localhost:5000/api/friends`).then(res => {
    console.log("response", res);
  });
};

const FriendsList = () => {
  useEffect(() => {
    getData();
    !sessionStorage.getItem("token")
      ? console.error("Please Login")
      : console.info("Login success");
  }, []);

  return <h1>test div</h1>;
};

export default FriendsList;
