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

  setExpiryTime = (expiryTime) => {
    this.setState({ expiryTime });
  };

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
              path={ROUTES.home}
              exact={true}
              render={(props) => (
                <Home isValidSession={this.isValidSession} {...props} />
              )}
            />
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
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
