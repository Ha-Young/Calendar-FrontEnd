import React from 'react';
import styled from 'styled-components';
//import MenuContainer from '../../containers/MenuContainer'
import Menu from '../Menu/Menu';

const HeaderWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  font-weight: bold;

  .contents {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

// TODO: Create your own header.
export default function Header({ clickPrevButton, clickNextButton, setWeeklyTheme, setDailyTheme }) { // 적절하지 못한 변수명.. 그리고 재 사용하게 빼기
  return (
    <HeaderWrapper>
      <header>
        <nav>
          <div>
            <Menu
              clickPrevButton={clickPrevButton}
              clickNextButton={clickNextButton}
              setWeeklyTheme={setWeeklyTheme}
              setDailyTheme={setDailyTheme}
              >
            </Menu>
          </div>
        </nav>
      </header>
    </HeaderWrapper>
  );
}
