import React, { useState } from "react";
import axios from "axios";

const AddFriend = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [email, setEmail] = useState("");

  const postFriend = () => {
    const postObj = {
      name: name,
      age: age,
      email: email
    };

    return axios
      .create({
        headers: {
          authorization: sessionStorage.getItem("token")
        },
        username: "Lambda School",
        password: "i<3Lambd4"
      })
      .post(`http://localhost:5000/api/friends`, postObj)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log("Data not posted", err));
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleAgeChange = e => {
    setAge(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  return (
    <div className="post-form">
      <form>
        <label>
          <strong>Add New Friend:</strong>
          <br />
          <br />
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={handleNameChange}
          />
          <br />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleEmailChange}
          />
          <br />
          <br />
          <input
            type="number"
            name="age"
            placeholder="Age"
            onChange={handleAgeChange}
          />
        </label>
      </form>
      <button onClick={postFriend}>Add New Friend!</button>
    </div>
  );
};

export default AddFriend;
