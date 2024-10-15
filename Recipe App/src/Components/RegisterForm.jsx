// src/Components/RegisterForm.jsx
import React, { useState } from "react";
import { auth } from "./Firebase";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Swal from "sweetalert2"; // Import SweetAlert2
import "./Register.css"; // Import the CSS for styling

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Show SweetAlert on successful registration
      await Swal.fire({
        icon: "success",
        title: "User registered successfully!",
        text: "You can now log in.",
      });
      navigate("/login"); // Navigate to login page after successful registration
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleRegister}>
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
          Already have an account?
          <span>
            <Link to="/login"> Login </Link>
          </span>
        </p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
