import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./pages.js";
import { NavBar } from "./components.js/NavBar.js";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
