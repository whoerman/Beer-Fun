import React from 'react';
import './App.css';
import Button from './components/layout/Button';
import Navbar from './components/layout/Navbar';
import Toptext from './components/layout/Toptext';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
          <Toptext/>
          <Button/>
          <Button/>
          <Button/>
          <Button/>
      </header>
    </div>
  );
}

export default App;
