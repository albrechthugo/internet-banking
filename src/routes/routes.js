import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Cards from '../pages/Cards';
import Extract from '../pages/Extract';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/dashboard/cards" component={Cards} />
        <Route path="/dashboard/details" component={Extract} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;