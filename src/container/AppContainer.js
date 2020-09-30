import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import ClockLoader from "react-spinners/ClockLoader";
import styled from 'styled-components';

import { authService, dataService } from '../utils/api';
import { reduceSnapshot } from '../utils/utilFunction';
import { setUser, setInitData } from '../actions';
import App from '../components/App';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function AppContainer({ isLogin, user, setUser, setInitData }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, [setUser]);

  useEffect(() => {
    if (!user) return;

    dataService.ref(`/calendar/`)
      .once('value')
      .then(snapshot => {
        setInitData(reduceSnapshot(snapshot.val(), user.uid));
        setIsLoading(false);
      })
  }, [user, setInitData]);

  return (
      isLoading
      ?
      <Wrapper>
        <ClockLoader
          size={150}
          color={"navy"}
        />
      </Wrapper>
      :
        <App isLogin={isLogin} />
  );
}

function mapStateToProps(state) {
  return {
    isLogin: state.isLogin,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setUser(userData) {
      dispatch(setUser(userData));
    },
    setInitData(data) {
      dispatch(setInitData(data));
    },
  };
}

AppContainer.propTypes = {
  isLogin: Proptypes.bool.isRequired,
  //user
  setUser: Proptypes.func.isRequired,
  setInitData: Proptypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
