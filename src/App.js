import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import CountryList from './components/CountryList';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <CountryList/>
    </div>
  );
}

export default App;
