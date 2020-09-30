import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Head = styled.div`
  border: 3px solid blue;  
  display: grid;
  grid-template-columns: 20% 1fr;
  
`; 

const MainTitle = styled.div`
  padding-top: 5px;
  font-size: 60px;
`;


// TODO: Create your own header.
export default function Header({ thisMonth }) {
  return (
    <Head>
      <div></div>
      <MainTitle>{thisMonth}</MainTitle>
    </Head>
  );
}
