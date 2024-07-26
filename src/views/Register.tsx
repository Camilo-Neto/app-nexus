import React, { useState } from "react";
import "../styles/Register.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Register: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <span className="close" onClick={onClose}>
        &times
      </span>
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="password">Name</label>
          <input
            type="name"
            id="name"
            value={password}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cancel</button>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default Register;
