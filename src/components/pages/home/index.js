import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import config from '../../../config';
import { ROUTES } from '../../../consts';
import Header from '../../ui/header';

const Home = (props) => {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_AUTHORIZE_URL, CALLBACK_URL } = config;

  const handleLogin = () => {
    window.location = `${SPOTIFY_AUTHORIZE_URL}?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${CALLBACK_URL}&scope=user-read-recently-played&response_type=token&show_dialog=true`;
  };

  const { isValidSession, location } = props;
  const { state } = location;
  const sessionExpired = state && state.session_expired;

  return (
    <React.Fragment>
      {isValidSession() ? (
        <Redirect to={ROUTES.dashboard} />
      ) : (
        <div className="login">
          <Header />
          <input
            onClick={handleLogin}
            value="Login to Spotify"
            type="submit"></input>
        </div>
      )}
    </React.Fragment>
  );
};

export default connect()(Home);
