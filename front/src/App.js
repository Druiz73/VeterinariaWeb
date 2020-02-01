import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import HomeAdmin from './Components/Admin/HomeAdmin/HomeAdmin';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Admin" >
          <HomeAdmin />
        </Route>
        <Route path="/" >
          <Home />
        </Route>
      </Switch>
    </Router>

  );
}
