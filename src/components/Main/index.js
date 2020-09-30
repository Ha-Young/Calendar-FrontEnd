import React, { useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import * as Styled from '../styled';

import Daily from '../Daily';
import Weekly from '../Weekly';
import { connect } from 'react-redux';
import { schedule } from '../../utils/api';
import { receiveSchedules } from '../../actions';

function Main ({ onLoad, schedules }) {
  useEffect(() => {
    onLoad();
  }, [onLoad]);

  console.log(schedules);

  return(
    <Styled.Main>
      <Link to="/main/daily">
        <button>일간</button>
      </Link>
      <Link to="/main/weekly">
        <button>주간</button>
      </Link>

      <Route path='/main/daily'>
        <Daily scheduleDatas={schedules.byId} />
      </Route>
      <Route path='/main/weekly'>
        <Weekly />
      </Route>
    </Styled.Main>);
}

const mapDispatchToProps = (dispatch) => {
  // 데이터를 firebase에서 받아와서 해당 데이터를 기반으로 액션을 생성하고, 해당 액션을 리덕스 스토어로 디스패치해서 스토어에 저장한다. 그리고 지금 이 Main컴포넌트에 스테이트로 꽂아주면 끝
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
