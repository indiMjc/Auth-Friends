import React, { useEffect, useState } from "react";
import axios from "axios";
import Friends from "../Friends/Friends";

const axiosWithAuth = () => {
  return axios.create({
    headers: {
      authorization: sessionStorage.getItem("token")
    }
  });
};

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  console.log("console.log output: FriendsList -> friends", friends);

  useEffect(() => {
    getData();
    !sessionStorage.getItem("token")
      ? console.error("Please Login")
      : console.info("Login success");
  }, []);

  const getData = () => {
    const authAxios = axiosWithAuth();
    authAxios.get(`http://localhost:5000/api/friends`).then(res => {
      console.log(res.data);
      setFriends(res.data);
    });
  };

  return (
    <>
      {friends.map(friend => (
        <div key={friend.name} className="friend-card">
          <Friends name={friend.name} age={friend.age} email={friend.email} />
        </div>
      ))}
      {/* <h1>test</h1> */}
    </>
  );
};

export default FriendsList;
