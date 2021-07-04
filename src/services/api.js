import axios from 'axios';

// Here we get the parameters form the url that we get
// We get this when we are in the Rederict component
// Here we can save the values to place them in a localstorage
export const getParamValues = (url) => {
  return url
    .slice(1)
    .split('&')
    .reduce((prev, curr) => {
      const [title, value] = curr.split('=');
      prev[title] = value;
      return prev;
    }, {});
};

// Setting the authentication for the api calls
// Api calls happen with Axios
export const setAuthHeader = () => {
  try {
    // Getting the values out of the localstorage
    const params = JSON.parse(localStorage.getItem('params'));
    if (params) {
      // Setting the default header
      // For the axios calls
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${params.access_token}`;
    }
  } catch (error) {
    // Error calling 
    console.log('Error setting auth', error);
  }
};

// GET function for axios
export const get = async (url, params) => {
  setAuthHeader();
  const result = await axios.get(url, params);
  return result.data;
};

// POST function for axios
export const post = async (url, params) => {
  setAuthHeader();
  const result = await axios.post(url, params);
  return result.data;
};

