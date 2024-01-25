import React, { useState } from "react";
import { LOCALSTORAGE } from "../config.js";

const LoginForm = ({ showForm, setShowForm, presetKey }) => {
  const [inputKey, setInputKey] = useState("");

  const handleLogin = () => {
    if (inputKey === presetKey) {
      localStorage.setItem(LOCALSTORAGE.ISLOGGEDIN, "true");
      setShowForm(false);
    } else {
      alert("Incorrect key");
    }
  };

  const handleContinueAsGuest = () => {
    setShowForm(false);
    localStorage.setItem(LOCALSTORAGE.ISLOGGEDIN, "guest");
  };
  if (!showForm) return null;
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-header">Priority Wellness</div>
        <input
          className="modal-input"
          type="text"
          value={inputKey}
          onChange={(e) => setInputKey(e.target.value)}
          placeholder="Enter your key"
        />
        <button className="modal-button" onClick={handleLogin}>
          Login
        </button>
        <button className="modal-button" onClick={handleContinueAsGuest}>
          Continue as Guest
        </button>
      </div>
    </div>
  );
};

export { LoginForm };
