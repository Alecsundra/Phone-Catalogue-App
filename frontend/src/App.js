import React, 
  { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import AppContext from './Context/Provider';
import Home from './Components/Home/Home';
import PhoneDetails from './Components/PhoneList/PhoneDetails/PhoneDetails';


const App = () => {


  return (
    <AppContext>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} />}
        />
        <Route
          exact
          path="/phones/:phoneId"
          render={(props) => <PhoneDetails {...props} />}
        />
        </Switch> 

 </AppContext>
  );
}

export default App;
