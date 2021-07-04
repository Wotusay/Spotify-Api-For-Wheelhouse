import {
  SET_LastNumbers,
  ADD_LastNumbers,
  SET_TopTracks,
  ADD_TopTracks,
  SET_Profile,
  ADD_Profile,
  SET_TopAlbums,
  ADD_TopAlbums,
  GET_CurrentlyPlaying,
} from '../consts/index.js';
import { get, post } from '../services/api.js';

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

const getCurrentlyPlaying = (currentlyPlaying) => ({
  type: GET_CurrentlyPlaying,
  currentlyPlaying,
});

// Initiate Get Result for all the api items needed
const initiateGetResult = () => {
  return async (dispatch) => {
    try {
      // Api call for the last numbers
      const API_URL_LASTNUMBERS = `https://api.spotify.com/v1/me/player/recently-played?limit=50`;
      const resultLastNumbers = await get(API_URL_LASTNUMBERS);
      // Api call for the Top numbers
      const API_URL_TOPTRACKS = `https://api.spotify.com/v1/me/top/tracks?limit=25&time_range=long_term`;
      const resultTopTracks = await get(API_URL_TOPTRACKS);
      // Api call for the Top Albums
      const API_URL_TOPALBUMS = `https://api.spotify.com/v1/me/top/artists?limit=25&time_range=long_term`;
      const resultTopAlbums = await get(API_URL_TOPALBUMS);
      // Api call for users profile
      const API_URL = `https://api.spotify.com/v1/me`;
      const result = await get(API_URL);
      // Api call for the current track playing
      const API_URL_CURRTRACK = `https://api.spotify.com/v1/me/player/currently-playing`;
      const resultCurrPlaying = await get(API_URL_CURRTRACK);
      // Dispatch method
      dispatch(getCurrentlyPlaying(resultCurrPlaying));

      setInterval(async () => {
        // To update the current plating track
        const resultCurrPlaying = await get(API_URL_CURRTRACK);
        dispatch(getCurrentlyPlaying(resultCurrPlaying));
      }, 3000);

      // Dispatch methods
      dispatch(setProfile(result));
      dispatch(setTopAlbums(resultTopAlbums));
      dispatch(setTopTracks(resultTopTracks));
      return dispatch(setLastNumbers(resultLastNumbers));
    } catch (error) {
      console.log('error', error);
    }
  };
};

// Function that initiates post requests
const initiatePostResult = async (userId, ids) => {
  try {
    // We use this functions to make a playlist with your best songs
    // Url needs the user id
    const API_URL_PLAYLIST = `https://api.spotify.com/v1/users/${userId}/playlists`;
    const title = { name: 'Top Tracks of All Time' }; // Name of the playlist
    // Making of the playlist
    await post(API_URL_PLAYLIST, title).then(async (r) => {
      // After we made a request we then can get the results in to to use it
      // We use this to put the tracks in the playlist
      const playlistId = r.id;
      const API_URL_PLAYLISTTRACKS = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
      await post(API_URL_PLAYLISTTRACKS, ids).then(async (play) => {
        // After we made the playlist we open it in a new window
        window.open(r.external_urls.spotify);
      });
    });
  } catch (error) {
    console.log('error', error);
  }
};

export {
  setLastNumbers,
  addLastNumbers,
  initiateGetResult,
  initiatePostResult,
  setProfile,
  addProfile,
  addTopAlbums,
  setTopAlbums,
  setTopTracks,
  addTopTracks,
};
