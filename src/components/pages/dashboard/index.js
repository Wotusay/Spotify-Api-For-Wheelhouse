import React, { useState } from 'react';
import { initiateGetResult } from '../../../actions/results';
import { connect } from 'react-redux';

const Dashboard = (props) => {
  const [isLoading, setIsLoading] = useState();
  const [selectedCategory, setSelectedCategory] = useState('history');
  const { isValidSession, history } = props;

  const handleClick = (e) => {
    if (isValidSession()) {
      setIsLoading(true);
      props.dispatch(initiateGetResult()).then(() => {
        setIsLoading(false);
      });
    } else {
      history.push();
    }
  };

  return (
    <div>
      <button onClick={(e) => handleClick(e)}>click for history</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    albums: state.history,
  };
};

export default connect(mapStateToProps)(Dashboard);
