import React from 'react';
import styled from 'styled-components';

const Head = styled.div`
  border: 3px solid blue;
  padding-left: 270px;
`;

const MainTitle = styled.div`
  padding-top: 5px;
  font-size: 60px;
`;

export default function Header ({ thisMonth }) {
  return (
    <Head>
      <MainTitle>{thisMonth}</MainTitle>
    </Head>
  );
}
