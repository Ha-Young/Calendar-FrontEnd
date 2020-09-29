import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Head = styled.div`
  border: 3px solid blue;  
  display: grid;
  grid-template-columns: 20% 1fr;
  
`; 

const HeadLeft = styled.div`

`;

const HeadRight = styled.div`
  padding-left: 30px;
`;


// TODO: Create your own header.
export default function Header() {
  return (
    <Head>
      <HeadLeft>1</HeadLeft>
      <HeadRight>September</HeadRight>
    </Head>
  );
}
