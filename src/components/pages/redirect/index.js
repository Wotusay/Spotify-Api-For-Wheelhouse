import React, { useEffect } from 'react';
import _ from 'lodash';
import { getParamValues } from '../../../services/api';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../../consts';

export default class RedirectPage extends React.Component {
  componentDidMount() {
    const { setExpiryTime, history, location } = this.props;
    console.log(this.props)
    try {
      if (_.isEmpty(location.hash)) {
        return history.push('/dashboard');
      }
      const access_token = getParamValues(location.hash);
      const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
      localStorage.setItem('params', JSON.stringify(access_token));
      localStorage.setItem('expiry_time', expiryTime);
      history.push('/dashboard');
    } catch (error) {
      history.push('/');
    }
  }
  render() {
    return null;
  }
}