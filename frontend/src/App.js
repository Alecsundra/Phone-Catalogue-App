import React, 
  { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import AppContext from './Context/Provider';
import Home from './Components/Home/Home';
import PhoneDetails from './Components/PhoneList/PhoneDetails/PhoneDetails';
import Navbar from './Components/Navbar/Navbar'


const App = () => {


  return (
    <AppContext>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
          <div><Navbar text={"Home"}/>
          <Home {...props} />
          </div>)}
        />
        <Route
          exact
          path="/phones/:id"
          render={(props) => (
          <div><Navbar text={"Back Home"}/>
          <PhoneDetails {...props} />
          </div>)}
        />
      </Switch> 

 </AppContext>
  );
}

export default App;
