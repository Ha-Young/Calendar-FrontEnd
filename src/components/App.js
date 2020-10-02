import React, { useEffect } from 'react';
import { saveSampleData, getData } from '../utils/api';
import { FETCH_DATA } from '../constants/ActionType';
import CalendarContainer from '../containers/CalendarContainer';
import DetailsContainer from '../containers/DetailsContainer';
import Header from './Header/Header';
import styled from 'styled-components';

const AppWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
const BodyWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const App = ({ dateState, needToFecthing, fetchData }) => {
  useEffect(() => {
    (async function () {
      let data;
      const query = `/${dateState.year}/${dateState.month + 1}/${dateState.week}`;

      try {
        data = await getData(query);
      } catch (error) {
        error.message = "데이터를 불러올 수 없습니다";
        data = { error: error.message };
      } finally {
        if (data === null) {
          data = {
            type: FETCH_DATA,
            dateState: {},
            detailsList: {},
          };
        }

        return fetchData(data);
      }
    })();
  }, [ needToFecthing ]);

  return (
    <AppWrapper>
      <Header />
      <BodyWrapper>
        <CalendarContainer />
        <DetailsContainer />
      </BodyWrapper>
    </AppWrapper>
  );
}

export default App;
