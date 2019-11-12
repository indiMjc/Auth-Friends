import React, { useState } from "react";

const AddFriend = () => {
  const [age, setAge] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="post-form">
      <form>
        <label>
          Add New Friend:
          <br />
          <br />
          <input type="text" name="name" placeholder="Enter name" />
          <br />
          <br />
          <input type="email" name="email" placeholder="Enter email" />
          <br />
          <br />
          <input type="number" name="age" placeholder="Age" />
        </label>
      </form>
    </div>
  );
};

export default AddFriend;
