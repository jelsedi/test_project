import React from "react";
import "./App.css";

const  myApp = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <p>Today's date is: {currentDate}</p>
        <p>Edit <code>src/App.js</code> and save to reload.</p>
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
 export default myApp;
