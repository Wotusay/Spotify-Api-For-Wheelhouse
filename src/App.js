import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from './consts';
import Home from './components/pages/home';
import Dashboard from './components/pages/dashboard';
import Redirect from './components/pages/redirect';

function App() {
  return (
    <>
      <Switch>
        <Route path={ROUTES.home} exact={true}>
          <Home />
        </Route>
        <Route path={ROUTES.dashboard}>
          <Dashboard />
        </Route>
        <Route path={ROUTES.redirect}>
          <Redirect />
        </Route>
      </Switch>
    </>
  );
}

export default App;
