import React, { useEffect, useState } from 'react';
import Container from '../publicComponent/Container/Container';
import styles from './ScheduleDetail.module.scss';
import styled from 'styled-components';
import { dateAssemble, plusFrontZero } from '../../utils/dateUtil';
import ButtonComponent from '../publicComponent/ButtonComponent/ButtonComponent';
import { deleteSchedule } from '../../api';
import { Link, Redirect } from 'react-router-dom';

const ColorBlock = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10%;
  background-color: ${({ color }) => color};
`;

const testData = {
  color: '#cad624',
  content: 'test data dgouaundfgo inseropgijseo irgnosp;eirg nop;seirngopiusenrgio;uesnrgpiuo esrngiunsepo rgjoeirw gj[oeirmgpoiuhj',
  day: 5,
  endHour: 9,
  key: "123123",
  month: 3,
  startHour: 7,
  year: 2021
};

const ScheduleDetail = ({ targetScheduleData, setTargetScheduleData }) => {
  const [isUpdate, setIsUpdate] = useState(false);

  const data = targetScheduleData ? JSON.parse(JSON.stringify(targetScheduleData)) : testData;
  const date = dateAssemble(data.year, data.month, data.day);
  
  useEffect(() => {
    console.log('isUpdate : ',isUpdate);
    return (isUpdate ? null : () => setTargetScheduleData(null));
  }, [isUpdate]);

  function handleUpdateButtonClick() {
    setIsUpdate(true);
  }

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
            <div className={styles.dateTimeWrapper}>{plusFrontZero(data.startHour) + ':00'} ~ {plusFrontZero(data.endHour) + ':00'}</div>
          </div>
        </div>
        <div className={styles.contentSection}>
          {data.content}
        </div>
        <div className={styles.buttonsSection}>
          <Link to={{pathname: "/event/new", state: data}}>
            <ButtonComponent textContent={'Update'} onClickEvent={handleUpdateButtonClick} className={styles.button}></ButtonComponent>
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
