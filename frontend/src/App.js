import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import AppContext from './Context/Provider';
import Home from './Components/Home/Home';
import PhoneDetails from './Components/PhoneList/PhoneDetails/PhoneDetails';
import Navbar from './Components/Navbar/Navbar';
import ScrollToTop from '../src/Utils/ScrollToTop';


const App = () => {

  return (
    <AppContext>
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
            <div>
              <Navbar text={"Home"}/>
              <Home {...props} />
            </div>
            )}
          />
          <Route
            exact
            path="/phones/:id"
            render={(props) => (
            <div>
              <Navbar text={"Back Home"}/>
              <PhoneDetails {...props} />
            </div>
            )}
          />
        </Switch> 
      </ScrollToTop>
    </AppContext>
  );
}

export default App;
