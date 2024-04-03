import { Link, redirect } from "react-router-dom/dist";
import { useState } from "react";
import Navbar from "./navbar";
import Donation from "./involved/Donation";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const hardcodedUsers = [
    { username: "admin", password: "password" },
    { username: "user1", password: "123456" },
    { username: "user2", password: "abc123" },
    // Add more username-password pairs as needed
  ];
  const handleLogin = () => {
    const user = hardcodedUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setIsLoggedIn(true);
      alert("you have logged in");
      if (setIsLoggedIn) {
      }
    } else {
      setIsLoggedIn(false);
      alert("invalid credentails");
    }
  };

  return (
    <>
      <div class="login-page">
        <div class="form">
          <div class="login">
            <div class="login-header">
              <h3>LOGIN</h3>
              <p>Please enter your credentials to login.</p>
            </div>
          </div>
          <form class="login-form">
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <button onClick={handleLogin}>login</button> ;
            <p class="message">
              Not registered? <Link to="/signin">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
