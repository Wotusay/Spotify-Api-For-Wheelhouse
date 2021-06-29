import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from './consts';
import Home from './components/pages/home';
import Dashboard from './components/pages/dashboard';
import Redirect from './components/pages/redirect';

class App extends React.Component {
  state = {
    expiryTime: '0',
  };

  componentDidMount() {
    let expiryTime;
    try {
      expiryTime = JSON.parse(localStorage.getItem('expiry_time'));
    } catch (error) {
      expiryTime = '0';
    }
    this.setState({ expiryTime });
  }

  render() {
    return (
      <>
        <Switch>
          <Route path={ROUTES.home} exact={true}>
            <Home />
          </Route>
          <Route path={ROUTES.dashboard}>
            <Dashboard />
          </Route>
          <Route
              path={ROUTES.redirect}
              render={(props) => (
                <Redirect
                  isValidSession={this.isValidSession}
                  setExpiryTime={this.setExpiryTime}
                  {...props}
                />
              )}
            />

        </Switch>
      </>
    );
  }
}

export default App;
