import React from 'react';
import './App.css';

import Navigation from "./components/Navigation.js";
import MainContent from "./components/MainContent.js";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <MainContent/>
    </div>
  );
}

export default App;
