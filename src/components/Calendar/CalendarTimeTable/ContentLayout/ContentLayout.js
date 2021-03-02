import React from 'react';
import styled from 'styled-components';

import OneHour from './OneHour/OneHour';

const ContentLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 100%;
`;

const ContentLayout = () => {
  function getOneHourArray() {
    const oneHourArray = [];
    for (let i = 0; i < 25; i++) {
      oneHourArray.push(<OneHour></OneHour>)
    }

    return oneHourArray;
  }

  return (
    <ContentLayoutContainer>
      {getOneHourArray()}
    </ContentLayoutContainer>
  );
};

export default ContentLayout;
