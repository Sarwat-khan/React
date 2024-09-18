import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 
import "./components/card.css";


function App() {
  return (
    <div className="app-container">
      <h1 className="heading">Sarwat Is Learning React</h1>

    
      <div className="buttons-container">
        <Link to="/First">
          <button className="custom-button">Practice One</button>
        </Link>

        <Link to="/Calculator">
          <button className="custom-button">Practice Two</button>
        </Link>

        <Link to="/Card">
          <button className="custom-button">Practice Three</button>
        </Link>

        <Link to="/Mapping">
          <button className="custom-button">Practice Four</button>
        </Link>

        <Link to="/Addintodiary">
          <button className="custom-button">Practice Five</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
