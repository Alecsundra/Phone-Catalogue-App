import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import AppContext from './Context/Provider';
import Home from './Components/Home/Home';
import PhoneDetails from './Components/PhoneList/PhoneDetails/PhoneDetails';
import Navbar from './Components/Navbar/Navbar';
import ScrollToTop from '../src/Utils/ScrollToTop';
// import FormPhone from './Components/FormPhone/FormPhone'


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
            path="/:id"
            render={(props) => (
            <div>
              <Navbar text={"Back Home"}/>
              <PhoneDetails {...props} />
            </div>
            )}
          />
          {/* <Route
            exact
            path="/addphone"
            render={(props) => (
            <div>
              <Navbar text={"Back Home"}/>
              <FormPhone {...props} />
            </div>
            )}
          /> */}
        </Switch> 
      </ScrollToTop>
    </AppContext>
  );
}

export default App;
