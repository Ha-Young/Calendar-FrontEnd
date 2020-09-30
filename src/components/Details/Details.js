import React from 'react';
import styles from './Details.module.css';
import styled from 'styled-components';

const DetailsWrapper = styled.div`
  width: ${(props) => props.detailsState ? "300px": "initial"};
  background: yellow;
`;
const Details = ({ detailsState }) => {
  return (
    <DetailsWrapper detailsState={detailsState}>
      <div className={styles.Details}></div>
    </DetailsWrapper>
  );
};

export default Details;