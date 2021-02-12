import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {show && (
        <div>
          <div class="topnav">
            <a class="active" href="#home">
              Home
            </a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
        </div>
      )}
      <br />
      <button onClick={() => setShow(!show)}>Show/Hide Nav</button>
    </div>
  );
}
