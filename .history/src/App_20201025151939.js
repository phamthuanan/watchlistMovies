import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Header} from './components/Header'
import {Watchlist} from './components/Watchlist'
import {Add} from './components/Add'
import {Watched} from './components/Watched'
import './lib/font-awesome/css/all.min.css'
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Watchlist />
        </Route>
        <Route exact path="/watched">
          <Watched />
        </Route>
        <Route exact path="/add">
          <Add />
        </Route>
        <Route exact path="/">
          <Watchlist />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
