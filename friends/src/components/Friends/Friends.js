import React from "react";

const Friends = props => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
    </>
  );
};

export default Friends;
