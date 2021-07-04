import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from './consts';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import Redirect from './components/pages/Redirect';

class App extends React.Component {
  // initial expirytime
  state = {
    expiryTime: '0',
  };

  componentDidMount() {
    let expiryTime;
    // Here we try to get the expirytime out of the localstorage
    try {
      expiryTime = JSON.parse(localStorage.getItem('expiry_time'));
    } catch (error) {
      expiryTime = '0';
    }
    // We overwrite then the initial expirytime
    this.setState({ expiryTime });
  }

  // When we make an new token we call new functions to overwrite it
  // This only needed for the rederict component
  setExpiryTime = (expiryTime) => {
    this.setState({ expiryTime });
  };

  // Checking if it the token is still valid
  isValidSession = () => {
    const currentTime = new Date().getTime();
    const expiryTime = this.state.expiryTime;
    const isSessionValid = currentTime < expiryTime;

    return isSessionValid;
  };

  render() {
    return (
      <>
        <div className="main">
          <Switch>
            <Route
              path={ROUTES.dashboard}
              render={(props) => (
                <Dashboard isValidSession={this.isValidSession} {...props} />
              )}
            />
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
            <Route
              path={ROUTES.home}
              render={(props) => (
                <Home isValidSession={this.isValidSession} {...props} />
              )}
            />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
