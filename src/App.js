import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{process.env.REACT_APP_URL}</h1>
        <h2>{process.env.REACT_APP_URL1}</h2>
        <h3>{process.env.REACT_APP_URL2}</h3>
      </header>
    </div>
  );
}

export default App;
