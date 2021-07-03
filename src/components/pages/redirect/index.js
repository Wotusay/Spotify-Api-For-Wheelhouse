import React from 'react';
import _ from 'lodash';
import { getParamValues } from '../../../services/api';
import { ROUTES } from '../../../consts';

export default class RedirectPage extends React.Component {
  componentDidMount() {
    // When the component mounts we make 3 new objects 
    const { setExpiryTime, history, location } = this.props;
    try {
      if (_.isEmpty(location.hash)) {
        // If the hash in the location is empty we already have an token that we can use
        // So we send the user straight to the dashboard
        return history.push(ROUTES.dashboard);
      }

      // Here we call the function we created to get all the parameters from
      const access_token = getParamValues(location.hash);

      // The spotify api token has an expiry time for the free users so we create a timmer
      // When the timer is done we will need to logg back in
      const expiryTime = new Date().getTime() + access_token.expires_in * 1000;

      // Setting the items in the localstorage
      localStorage.setItem('params', JSON.stringify(access_token));
      localStorage.setItem('expiry_time', expiryTime);

      // Calling the expirytime function to check if it isn't expired
      setExpiryTime(expiryTime);
      // Push to dashboard
      history.push(ROUTES.dashboard);
    } catch (error) {
      // Any errors we send them back to the home
      history.push(ROUTES.home);
    }
  }
  render() {
    return null;
  }
};