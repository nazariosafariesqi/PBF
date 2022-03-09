import logo from './logo.svg';
import './App.css'; 
import React, {Component} from 'react';
import Test from './LifecycleComponent';

function App() {
  return (
    <div class="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Test 123 </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div class="praktikum">
        <Test/>
      </div>
    </div>
  );
}

export default App;
