import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ScheduleDetail.module.scss';
import styled from 'styled-components';
import { dateAssemble, plusFrontZero } from '../../utils/dateUtil';
import { deleteSchedule } from '../../api';

import Container from '../publicComponent/Container/Container';
import ButtonComponent from '../publicComponent/ButtonComponent/ButtonComponent';

const ColorBlock = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10%;
  background-color: ${({ color }) => color};
`;

const ScheduleDetail = ({ targetScheduleData, setTargetScheduleData }) => {
  const data = targetScheduleData;
  const date = dateAssemble(data.year, data.month, data.day);
  const startHour = ((data.startHour / 10) < 1 ? plusFrontZero(data.startHour) : data.startHour) + ':00';
  const endHour = ((data.endHour / 10) < 1 ? plusFrontZero(data.endHour) : data.endHour) + ':00';
  
  useEffect(() => {
    return () => setTargetScheduleData(null);
  }, []);

  function handleDeleteButtonClick() {
    deleteSchedule(data);
  }

  return (
    <Container className={styles.container}>
      <div className={styles.detailsContainer}>
        <div className={styles.detailTitle}>Schedule Detail</div>
        <div className={styles.upperSection}>
          <ColorBlock color={data.color} className={styles.colorBlock}></ColorBlock>
          <div className={styles.dateSection}>
            <div className={styles.dateTimeWrapper}>{date}</div>
            <div className={styles.dateTimeWrapper}>{startHour} ~ {endHour}</div>
          </div>
        </div>
        <div className={styles.contentSection}>
          {data.content}
        </div>
        <div className={styles.buttonsSection}>
          <Link to={{pathname: "/event/new", state: data}}>
            <ButtonComponent textContent={'Update'} className={styles.button}></ButtonComponent>
          </Link>
          <Link to="/">
            <ButtonComponent textContent={'Delete'} onClickEvent={handleDeleteButtonClick} className={styles.button}></ButtonComponent>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ScheduleDetail;
