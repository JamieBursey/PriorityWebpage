import { LoginForm } from "../components.js";
import { useState, useEffect } from "react";

const Home = ({ setIsLoggedIn, showForm, setShowForm }) => {
  return (
    <div className="text-center">
      <img src="/header.jpeg" height={"300px"} width={"70%"} alt="Header" />
      <LoginForm
        showForm={showForm}
        setShowForm={setShowForm}
        presetKey="1234"
        onLoginStatusChange={setIsLoggedIn}
      />
    </div>
  );
};

export { Home };
