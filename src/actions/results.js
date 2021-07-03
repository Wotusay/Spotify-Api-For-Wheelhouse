import {
  SET_LastNumbers,
  ADD_LastNumbers,
  SET_TopTracks,
  ADD_TopTracks,
  SET_Profile,
  ADD_Profile,
  SET_TopAlbums,
  ADD_TopAlbums,
} from '../consts/index.js';
import { get } from '../services/api.js';

const setLastNumbers = (lastNumbers) => ({
  type: SET_LastNumbers,
  lastNumbers,
});

const addLastNumbers = (lastNumbers) => ({
  type: ADD_LastNumbers,
  lastNumbers,
});

const setTopTracks = (topTracks) => ({
  type: SET_TopTracks,
  topTracks,
});

const addTopTracks = (topTracks) => ({
  type: ADD_TopTracks,
  topTracks,
});

const setTopAlbums = (topAlbums) => ({
  type: SET_TopAlbums,
  topAlbums,
});

const addTopAlbums = (topAlbums) => ({
  type: ADD_TopAlbums,
  topAlbums,
});

const setProfile = (profile) => ({
  type: SET_Profile,
  profile,
});

const addProfile = (profile) => ({
  type: ADD_Profile,
  profile,
});

// Initiate Get Result for all the api items needed
const initiateGetResult = () => {
  return async (dispatch) => {
    try {
      const API_URL_LASTNUMBERS = `https://api.spotify.com/v1/me/player/recently-played?limit=50`;
      const resultLastNumbers = await get(API_URL_LASTNUMBERS);

      const API_URL_TOPTRACKS = `https://api.spotify.com/v1/me/top/tracks?limit=25`;
      const resultTopTracks = await get(API_URL_TOPTRACKS);

      const API_URL_TOPALBUMS = `https://api.spotify.com/v1/me/top/artists?limit=25`;
      const resultTopAlbums = await get(API_URL_TOPALBUMS);

      const API_URL = `https://api.spotify.com/v1/me`;
      const result = await get(API_URL);

      dispatch(setProfile(result));
      dispatch(setTopAlbums(resultTopAlbums));
      dispatch(setTopTracks(resultTopTracks));
      return dispatch(setLastNumbers(resultLastNumbers));
    } catch (error) {
      console.log('error', error);
    }
  };
};

export {
  setLastNumbers,
  addLastNumbers,
  initiateGetResult,
  setProfile,
  addProfile,
  addTopAlbums,
  setTopAlbums,
  setTopTracks,
  addTopTracks,
};
