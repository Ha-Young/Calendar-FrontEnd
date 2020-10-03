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

  body {text-align: center;}

  a {
    text-decoration: none;
    color: black;
  }

  li {
    list-style-type: none;
  }
`;

export const Main = styled.div`
  button{
    padding: 10px;
    margin: 10px;
  }
`;

export const CalendarContainer = styled.div`
  min-height: 500px;
  width: 80%;
  max-width: 800px;
  margin: 10px auto;
  margin-bottom: 100px;
`;

export const Daily = styled.div`
  position: relative;

  h2 {
    margin-bottom: 20px;
  }

  .timelines {
    position: absolute;
    width: 100%;
    z-index: 500;
    margin-bottom: 100px;
  }
  .timeline {
    position: relative;
    border: 1px solid #d9d7d7;
    min-height: 30px;
    max-height: 30px;
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
    justify-content: space-around;
    z-index: 1000;
  }
  .schedule {
    position: relative;
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

  h2{
    margin-bottom: 70px;
  }

  .daylines {
    position: absolute;
    width: 100%;
    height: 720px;
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
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
  }

  .timelines {
    position: absolute;
    width: 100%;
    z-index: 500;
    margin-bottom: 100px;
  }
  .timeline {
    position: relative;
    border: 1px solid #d9d7d7;
    min-height: 30px;
    max-height: 30px;
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
    justify-content: space-around;
    z-index: 1000;
  }
  .schedule {
    position: absolute;
    box-shadow: 0 0 4px black;
    padding:1em;
    flex:1;
    overflow-y: auto;

    .scheduleDesc{
      font-size: 0.8em;
    }
  }

  .daily {
    flex: 1;
    position: relative;
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

export const Modal = styled.div`
  background-color: red;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  min-height: 500px;
`;

export const Overlay = styled.div`
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  width: 100%;
  height: 100vh;
  opacity: 0.8;

`;

export const Header = styled.div`
  box-shadow: 0px 1px 5px black;
  margin-bottom: 20px;

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
