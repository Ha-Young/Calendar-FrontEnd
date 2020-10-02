import React from 'react';
import styled from 'styled-components';
import styles from './Details.module.css';

const DetailsWrapper = styled.div`
  width: 300px;
  display: ${(props) => props.detailsState ? "initial": "none"};
  border-left: 2px solid #e6e6e6;
`;
const Details = ({ dateState, details, closeDetails }) => {
  const { detailsState, focusedItemIndex } = details;
  const handleClick = () => {};

  return (
    <DetailsWrapper className={styles.Details} detailsState={detailsState}>
      <div className={styles.DetailHeader}>
        <div className={styles.DetailsTitle}>details..</div>
        <div className={styles.DetailCloseButton} onClick={() => closeDetails()}>닫기</div>
      </div>
      <div className={styles.DetailBody}>
        <input id="detail-title" type="text" placeholder="제목" onChange={handleClick}/>
        <textarea id="detail-description" type="text" placeholder="설명" onChange={handleClick}/>
        <input id="detail-startTime" type="text" placeholder="시작 시간을 적어주세요" onChange={handleClick}/>
        <input id="detail-duringTime" type="text" placeholder="얼마나 걸리는지 적어주세요" onChange={handleClick}/>
        <button onClick={() => handleClick}>저장</button>
      </div>
    </DetailsWrapper>
  );
};

export default Details;
