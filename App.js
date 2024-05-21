/*  import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

*/

import React from "react";
import "./App.css";
import HomeDashboard from "./component/HomeDashBoard"; // Import the HomeDashboard component

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>WELCOME TO PRODUCT MANAGEMENT WEBSITE</h3>

      <img
        src="https://www.masleyo.com/wp-content/uploads/2022/05/Product-Management.jpg"
        width="90%"
        height="450"
        alt="Alternate text"
      />
    </div>
  );
}

export default App;
