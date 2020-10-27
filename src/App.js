import React from 'react';
import Header from './Header/Header';
import Welcome from './Welcome/Welcome';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      {/* TODO: if no user is logged in, show welcome page at '/'
      otherwise, re-route to user's collection */}
      <Welcome />
    </div>
  );
}

export default App;
