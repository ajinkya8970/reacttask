import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here
    console.log("Username:", username);
    console.log("Password:", password);
    // Reset form
    fetch("http://localhost:3500/addduser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers if needed
      },
      body: JSON.stringify({
        // Add your data here

        username: username,
        password: password,
      }),
    })
      .then((response) => console.log("Product added succesfully"))
      .then((data) => {
        // Handle the response data
        console.log(data);

        alert("user successfully created");
        navigate("/signin");
      })
      .catch((error) => {
        // Handle any errors

        alert("invalid username or password please signup");
        navigate("/sign");

        console.error("Error:", error);
      });
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignUpForm;
