import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { onClear } from './actions';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button style={{
          outline: "none",
          fontSize: 14,
          border: "1px solid #e8eaed",
          borderRadius: 5,
          height: 37,
          padding: "0 15px",
          marginBottom: 15,
          color: "#202020",
          cursor: "pointer"
        }} onClick={() => props.onClear()}>
          Clear state
        </button>
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

export default connect(null, { onClear })(App);
