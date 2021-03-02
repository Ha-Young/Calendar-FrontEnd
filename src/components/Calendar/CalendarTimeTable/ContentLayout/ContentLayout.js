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
  return (
    <ContentLayoutContainer>
      <OneHour></OneHour>
      <OneHour></OneHour>
      <OneHour></OneHour>
      <OneHour></OneHour>
      <OneHour></OneHour>
      <OneHour></OneHour>
    </ContentLayoutContainer>
  );
};

export default ContentLayout;
