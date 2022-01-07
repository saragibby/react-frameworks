/**
 * Main App component
 * Rendered from index into DOM, contains the entire application.
 */

import React from "react";
import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UnitedStatesOnly from "./pages/UnitedStatesOnly";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <h1>Nope, create-react-app is not what you want, and here's why</h1>
          <h2>
            <Link to="/">Your Own Adventure</Link>
          </h2>
          <ul>
            <li>
              <Link to="/us">United States</Link>
            </li>
            <li>Global</li>
            <li>Global + US</li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/us" element={<UnitedStatesOnly />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
