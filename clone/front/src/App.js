import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Chat} from './components/Chat'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chat Terra</h1>
        <Chat></Chat>
      </header>
    </div>
  );
}

export default App;
