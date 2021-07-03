import React, { useEffect, useState } from 'react';
import { initiateGetResult } from '../../../actions/results';
import { connect } from 'react-redux';
import { ROUTES } from '../../../consts';
import LatestTracks from '../../ui/LatestTracks';

const Dashboard = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const { isValidSession, history } = props;

  useEffect(() => {
    if (isValidSession()) {
      setIsLoading(true);
      props.dispatch(initiateGetResult()).then(() => {
        setIsLoading(false);
        console.log(props.lastNumbers.items);
      });
    } else {
      history.push({
        pathname: ROUTES.home,
        state: {
          session_expired: true,
        },
      });
    }
  }, []);

  const { lastNumbers } = props;
  return (
    <div>
      {Object.keys(lastNumbers).length > 0 ? (
        <LatestTracks lastNumbers={lastNumbers} />
      ) : (
        'Loading ...'
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    lastNumbers: state.lastNumbers,
  };
};

export default connect(mapStateToProps)(Dashboard);
