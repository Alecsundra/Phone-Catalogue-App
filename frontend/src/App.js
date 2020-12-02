import React, 
  { useEffect, useState } from 'react';
import './App.css';
import AppContext from './Context/Provider';
import Home from './Components/Home/Home';

const App = () => {


  return (
    <AppContext>

      <div className="app">
        <Home />
      </div>

 </AppContext>
  );
}

export default App;
