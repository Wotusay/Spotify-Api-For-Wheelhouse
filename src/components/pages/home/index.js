import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import config from '../../../config';
import { ROUTES } from '../../../consts';
import Header from '../../ui/Header';

const Home = (props) => {
  // Getting all the static props out of the config file
  const { SPOTIFY_CLIENT_ID, SPOTIFY_AUTHORIZE_URL, CALLBACK_URL } = config;

  // This is the login screen to authorize the spotify user
  // To get all the data we needed i had to add an extra token
  const handleLogin = () => {
    window.location = `${SPOTIFY_AUTHORIZE_URL}?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${CALLBACK_URL}&scope=user-read-recently-played%20user-top-read%20user-read-private%20playlist-modify-public%20user-read-currently-playing&response_type=token&show_dialog=true`;
  };

  const { isValidSession } = props;

  return (
    <React.Fragment>
      {isValidSession() ? (
        <Redirect to={ROUTES.dashboard} />
      ) : (
        <>
          <div className="topbar"> </div>
          <div className=" flex justify-center mt-64">
            <div className="card">
              <Header />
              <input
                className="bg-green-600 rounded-full p-5 pl-8 pr-8 text-3xl transition ease-in duration-400 font-semibold hover:shadow-xl "
                onClick={handleLogin}
                value="Login to Spotify"
                type="submit"></input>
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default connect()(Home);
