import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here
    console.log("Username:", username);
    console.log("Password:", password);
    // Reset form
    fetch("http://localhost:3500/verifyuser", {
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
      .then((data) => data.json())
      .then((data) => {
        if (data?.token) {
          sessionStorage.setItem("token", data?.token);
          navigate("/cart");
        } else {
          alert("invalid username create  a account");
          navigate("/signup");
        }
      })
      .catch((error) => {
        // Handle any errors
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
        <button type="submit">Sign In</button>
      </form>
    </>
  );
};

export default SignIn;
