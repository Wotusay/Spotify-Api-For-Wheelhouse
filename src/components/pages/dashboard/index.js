import React, { useEffect } from 'react';
import { initiateGetResult } from '../../../actions/results';
import { connect } from 'react-redux';
import { ROUTES } from '../../../consts';
import LatestTracks from '../../ui/LatestTracks';

const Dashboard = (props) => {
  const { isValidSession, history } = props;

  // Here we get the desired Spotify api items
  // When the page loads

  /* eslint-disable */
  useEffect(() => {
    if (isValidSession()) {
      // If we have a valid token
      // We initialize the api call
      props.dispatch(initiateGetResult()).then(() => {
        console.log(props.profile);
      });
    } else {
      // Else we push the user back  to the home
      history.push({
        pathname: ROUTES.home,
        state: {
          session_expired: true,
        },
      });
    }
  }, []);
  /* eslint-enable */

  // So its easier to get the items
  const { lastNumbers, topAlbums, topTracks, profile } = props;
  return (
    <div>
      {Object.keys(lastNumbers).length > 0 ||
      Object.keys(topAlbums).length > 0 ||
      Object.keys(topTracks).length > 0 ||
      Object.keys(profile).length > 0 ? (
        <>
        <p className="font-bold text-7xl mt-20 ml ml-11 mb-20"> Welcome {profile.display_name} </p>
        <LatestTracks lastNumbers={lastNumbers} />
        </>
      ) : (
        'Loading ...'
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  // Getting the items form the api with redux
  return {
    lastNumbers: state.lastNumbers,
    topTracks: state.topTracks,
    topAlbums: state.topAlbums,
    profile: state.profile,
  };
};

export default connect(mapStateToProps)(Dashboard);
