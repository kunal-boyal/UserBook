import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"

import Registration from './containers/Registration'
import Login from './containers/Login'
import Dashboard from './containers/Dashboard'
import CreateUser from './containers/CreateUser'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/createUser" component={CreateUser} />
        </Switch>
      </div>
    );
  }
}

export default App;
