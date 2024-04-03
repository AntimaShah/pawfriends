import React from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
export default function Signin() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, csetPassword] = useState("");
  const [registrationResult, setRegistrationResult] = useState("");
  const hardcodedUsers = [
    { username: "admin", email: "admin@example.com", password: "password" },
    { username: "user1", email: "user1@example.com", password: "123456" },
    { username: "user2", email: "user2@example.com", password: "abc123" },
    // Add more user objects as needed
  ];
  const handleRegistration = () => {
    const isUserAlreadyRegistered = hardcodedUsers.some(
      (user) => user.username === username || user.email === email
    );

    if (isUserAlreadyRegistered) {
      alert("user already exists");
      setRegistrationResult("User already exists!");
    } else {
      // You can implement your registration logic here
      // For simplicity, we'll just add the new user to the hardcodedUsers array
      const newUser = { username, email, password };
      hardcodedUsers.push(newUser);
      setRegistrationResult("Registration successful!");
      alert("sigin sucesssful");
      <Link to="/login"></Link>;
    }
  };
  return (
    <div class="signin-page">
      <div class="signinform">
        <div class="signin">
          <div class="signin-header">
            <h3>SIGNUP</h3>
            <p>Please create your account.</p>
          </div>
        </div>
        <form class="signin-form">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="confirm password"
            name="cpassword"
            value={cpassword}
            onChange={(e) => csetPassword(e.target.value)}
          />

          <button name="signup" value="register" onClick={handleRegistration}>
            SIGNUP
          </button>

          <p class="message">
            <Link to="/login">ALREADY HAVE AN ACCOUNT</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
