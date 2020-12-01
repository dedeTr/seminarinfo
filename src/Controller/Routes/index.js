import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Admin, CreateWebinar, Home, Login, Register } from '../../View/Pages';


function Routes() {
    return (
        <Router>
          <Switch>
            <Route path="/dashboard">
              <Home />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>  
            <Route path="/create">
              <CreateWebinar />
            </Route>
            <Route path="/register">
              <Register />
            </Route> 
            <Route exact path="/">
              <Login />
            </Route>       
          </Switch>
      </Router>
    );
}

export default Routes
