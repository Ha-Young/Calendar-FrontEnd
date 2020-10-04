import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { saveData } from '../../utils/api';
import qs from 'query-string';
import DateInfo from '../DateInfo/DateInfo';
import styles from './EventDetails.module.css';
import styled from 'styled-components';

const EventDetailsWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const EventDetails = ({ location, dateState, mode }) => {
  const history = useHistory();
  const { year, month, week } = dateState;
  const { weekIndex, timeIndex } = qs.parse(location.search);
  const [ startTime, setStartTime ] = useState(timeIndex);
  const onChange = (e) => {
    setStartTime(e.tartet.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const upLoadPath = `${year}/${month + 1}/${week}/${weekIndex}`;
    const upLoadData = {
      title: e.target.title.value,
      description: e.target.description.value,
      time: {
        startTime: timeIndex,
        duringTime: e.target.duringTime.value,
      },
    };

    (async function () {
      const saveResult = await saveData(upLoadPath, upLoadData);

      if (saveResult.resultCode === "ERROR") {
        alert(saveResult.errorMessage);
      } else {
        history.goBack();
      }
    })();
  };

  return (
    <EventDetailsWrapper>
      <div className={styles.Details}>
        <div className={styles.DetailsHeader}>
          <div className={styles.DetailsTitle}>Event details..</div>
        </div>
        <div className={styles.DetailsTimeInfo}>
          <DateInfo dateState={dateState} mode={mode}/>
        </div>
        <div className={styles.DetailsBody}>
          <form onSubmit={handleSubmit}>
            <label>제목</label>
            <input type="text" name="title" placeholder="제목"/>
            <label>세부사항</label>
            <textarea type="text" name="description"/>
            <label>시작시간 (1시간 단위)</label>
            <input type="text" name="startTime" placeholder="시작 시간을 적어주세요" value={startTime} onChange={(e) => onChange(e)}/>
            <label>작업시간 (1시간 단위)</label>
            <input type="text" name="duringTime" placeholder="얼마나 걸리는지 적어주세요"/>
            <input type="submit" value="저장"/>
          </form>
        </div>
      </div>
    </EventDetailsWrapper>
  );
};

export default EventDetails;
