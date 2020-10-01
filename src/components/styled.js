import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans');

  @font-face {
    font-family: 'IBMPlexSansKR-Light';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Light.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    font-family: 'Work Sans', 'IBMPlexSansKR-Light', sans-serif;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export const Main = styled.div`
  /* background-color: pink; */

  button{
    padding: 10px;
    margin: 10px;
  }
`;

export const CalendarContainer = styled.div`
  /* background-color: orangered; */
  min-height: 500px;
  width: 80%;
  max-width: 800px;
  margin: 40px auto;
`;

export const Daily = styled.div`
  position: relative;
  /* background-color: white; */

  .timelines {
    position: absolute;
    width: 100%;
    z-index: 500;
  }
  .timeline {
    position: relative;
    border: 1px solid #d9d7d7;
    min-height: 60px;
    max-height: 60px;
  }
  .time {
    position: absolute;
    top: 0;
    left: -50px;
    /* transform: translateY(-50%); */
    /* background-color:white; */
    color: #595959;
    font-size: 12px;
  }

  .schedules {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 1000;
  }
  .schedule {
    position: relative;
    top: 0px; /* 임시 */
    box-shadow: 0 0 4px black;
    padding:1em;
    flex:1;

    .scheduleDesc{
      font-size: 0.8em;
    }
  }
`;

export const Weekly = styled.div`
  position: relative;

  .daylines {
    position: absolute;
    width: 100%;
    height: 1440px;
    z-index: 550;
    display: flex;
    align-items: stretch;
  }
  .dayline {
    flex: 1;
    align-self: stretch;
    position: relative;
    border: 1px solid #d9d7d7;
  }
  .day {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
  }

  .timelines {
    position: absolute;
    width: 100%;
    z-index: 500;
  }
  .timeline {
    position: relative;
    border: 1px solid #d9d7d7;
    min-height: 60px;
    max-height: 60px;
  }
  .time {
    position: absolute;
    top: 0;
    left: -50px;
    color: #595959;
    font-size: 12px;
  }

  .schedules {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 1000;
  }
  .schedule {
    position: relative;
    top: 0px; /* 임시 */
    box-shadow: 0 0 4px black;
    padding:1em;
    flex:1;

    .scheduleDesc{
      font-size: 0.8em;
    }
  }
`;

export const Schedule = styled.div`
  h1 {
    margin-bottom: 1em;
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 0 auto;

    label {
      background-color: ivory;
      border-radius: 3px;
      width: 40%;
      padding: 10px;
    }

    input {
      margin: 0 5px;
      flex: 1;
    }

    & > div {
      margin: 3px 0;
      padding: 10px;
      display: flex;
      background-color: black;
    }

    button {
      width: 100px;
      margin: 20px auto;
      padding: 10px;
    }
  }
`;

export const Header = styled.div`
  box-shadow: 0px 1px 5px black;
  margin-bottom: 30px;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80px;
  }

  li {
    margin: 0 30px;
  }
`;
