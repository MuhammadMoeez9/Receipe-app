// src/Components/LoginForm.jsx
import React, { useState } from "react";
import { auth } from "./Firebase"; // Ensure the correct path to your firebase.js file
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth"; // Correct import from firebase/auth
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Swal from "sweetalert2"; // Import SweetAlert2
import "./Login.css"; // Optional CSS for styling

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful");

      // Show success alert
      await Swal.fire({
        title: "Login Successful",
        text: "You have logged in successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });

      navigate("/"); // Navigate to home page after successful login
    } catch (err) {
      // Handle specific Firebase errors
      if (err.code === "auth/wrong-password") {
        await Swal.fire({
          title: "Error",
          text: "Your password is incorrect.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      } else if (err.code === "auth/user-not-found") {
        await Swal.fire({
          title: "Error",
          text: "No user found with this email.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      } else {
        setError(err.message); // For other errors, show the default error message
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <p>
          Don't have an account?
          <span>
            <Link to="/register"> Register</Link>
          </span>
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
