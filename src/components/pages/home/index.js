import React from 'react';
import config from '../../../config';
import Header from '../../ui/header';

const Home = () => {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_AUTHORIZE_URL, CALLBACK_URL } = config;

  const handleLogin = () => {
    window.location = `${SPOTIFY_AUTHORIZE_URL}?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${CALLBACK_URL}&response_type=token&show_dialog=true`;
  };

  return (
    <div className="login">
      <Header />
      <input
        onClick={handleLogin}
        value="Login to Spotify"
        type="submit"></input>
    </div>
  );
};

export default Home;
