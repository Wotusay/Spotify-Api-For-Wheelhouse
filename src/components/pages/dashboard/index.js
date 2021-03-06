import React, { useEffect, useState } from 'react';
import { initiateGetResult } from '../../../actions/results';
import { connect } from 'react-redux';
import { ROUTES } from '../../../consts';
import LatestTracks from '../../ui/LatestTracks';
import TopTracks from '../../ui/TopTracks';
import LoadingCirkle from '../../ui/LoadingCirckle';
import ProfileHeader from '../../ui/ProfileHeader';
import TopArtists from '../../ui/TopArtists';
import OverlayScrollbars from 'overlayscrollbars';


const Dashboard = (props) => {
  const { isValidSession, history } = props;
  const [greet, setGreet] = useState('Good Morning');

  // Here we get the desired Spotify api items
  // When the page loads

  const greetUser = () => {
    const myDate = new Date();
    const hrs = myDate.getHours();

    if (hrs < 12) {
      setGreet('Good morning');
    }
    if (hrs >= 12 && hrs <= 17) {
      setGreet('Good afternoon');
    }
    if (hrs >= 17 && hrs <= 24) {
      setGreet('Good evening');
    }
  };

  /* eslint-disable */
  useEffect(() => {
    greetUser();
    if (isValidSession()) {
      // If we have a valid token
      // We initialize the api call
      props.dispatch(initiateGetResult()).then(() => {
        console.log(props.topTracks.items);
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

  useEffect(() => {
    OverlayScrollbars(document.querySelectorAll('#outer'), {
      className: 'os-theme-light' ,
      scrollbars: {
        visibility: 'auto',
        autoHide: 'leave',
        autoHideDelay: 800,
      }
    });
  })
  /* eslint-enable */



  // So its easier to get the items
  const {
    lastNumbers,
    topAlbums,
    topTracks,
    profile,
    currentlyPlaying,
  } = props;
  return (
    <div>
      {Object.keys(lastNumbers).length > 0 ||
      Object.keys(topAlbums).length > 0 ||
      Object.keys(topTracks).length > 0 ||
      Object.keys(profile).length > 0 ? (
        <>
          <div className="topbar"> </div>
          <p className="font-bold text-7xl mt-20 ml ml-36 mb-20">{greet}</p>

          <ProfileHeader profile={profile} />
          <div className="flex justify-evenly mr-20">
            <LatestTracks lastNumbers={lastNumbers} />
            <TopTracks
              topTracks={topTracks}
              profile={profile}
              currentlyPlaying={currentlyPlaying}
            />
            <TopArtists topAlbums={topAlbums} profile={profile} />
          </div>
        </>
      ) : (
        <LoadingCirkle />
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
    currentlyPlaying: state.currentlyPlaying,
  };
};

export default connect(mapStateToProps)(Dashboard);
