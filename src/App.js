import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase from "firebase/app";
import "firebase/firestore";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home, Kelly, Danyelle, GiftCards, Emily, Courtney } from "./pages.js";
import { NavBar } from "./components.js/NavBar.js";
import { LOCALSTORAGE } from "./config.js/index.js";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem(LOCALSTORAGE.ISLOGGEDIN) === "false"
  );
  const [showForm, setShowForm] = useState(true);
  return (
    <>
      <div className="bg-white" style={{ minHeight: "100vh" }}>
        <BrowserRouter>
          <NavBar isLoggedIn={isLoggedIn} />
          <Routes>
            <Route
              path="/PriorityWebpage"
              element={
                <Home
                  setIsLoggedIn={setIsLoggedIn}
                  showForm={showForm}
                  setShowForm={setShowForm}
                />
              }
            ></Route>
            <Route path="/kelly" element={<Kelly />}></Route>
            <Route path="/danyelle" element={<Danyelle />}></Route>
            <Route path="/giftCards" element={<GiftCards />}></Route>
            <Route path="/emily" element={<Emily />}></Route>
            <Route path="/courtney" element={<Courtney />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
