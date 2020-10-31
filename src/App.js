import React from 'react';
import Header from './Header/Header';
import Welcome from './Welcome/Welcome';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      {/* TODO: if no user is logged in, show welcome page at '/'
      otherwise, re-route to user's collection */}

      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
