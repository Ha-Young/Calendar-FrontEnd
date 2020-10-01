import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import * as Styled from '../styled';

import Daily from '../Daily';
import Weekly from '../Weekly';
import { connect } from 'react-redux';
import { schedule } from '../../utils/api';
import { receiveSchedules } from '../../actions';
import renderSchedules from '../../utils/renderSchedules';

function Main ({ onLoad, schedules }) {
  useEffect(() => {
    onLoad();
  }, [onLoad]);

  return(
    <Styled.Main>
      <Link to={`/main/${params}/prev`} >
        <button>{'<'}</button>
      </Link>
      <Link to='/main/daily'>
        <button>일간</button>
      </Link>
      <Link to='/main/weekly'>
        <button>주간</button>
      </Link>
      <Link to={`/main/${params}/next`}>
        <button>{'>'}</button>
      </Link>

      <Styled.CalendarContainer>
        <Route path='/main/daily'>
          <Daily
            scheduleDatas={schedules.byId}
            renderSchedules={renderSchedules}
          />
        </Route>
        <Route path='/main/weekly'>
          <Weekly
            scheduleDatas={schedules.byId}
            renderSchedules={renderSchedules}
          />
        </Route>
      </Styled.CalendarContainer>
    </Styled.Main>);
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad () {
      schedule.getSchedules(schedules => dispatch(receiveSchedules(schedules)));
    }
  };
};
const mapStateToProps = (state) => {
  return {
    schedules: state.schedules
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
