import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-right: 10px;
  display: grid;
  grid-template-columns: 6% 1fr;
  border: 3px solid blue;
`;

const Time = styled.div`
  padding-top: 60px;
  display: grid;
  grid-auto-rows: minmax(100px, auto);
  align-items: center;
`;
const Schedules = styled.div`
  padding-top: 10px;
  display: grid;
  grid-auto-rows: minmax(100px, auto);
`;

const Hour = styled.div`
  text-align: center;
`;

export default function CalendarTimeline () {

  return (
    <Wrapper>
      <Time>
        <Hour>1am</Hour>
        <Hour>2am</Hour>
        <Hour>3am</Hour>
        <Hour>4am</Hour>
        <Hour>5am</Hour>
        <Hour>6am</Hour>
        <Hour>7am</Hour>
        <Hour>8am</Hour>
        <Hour>9am</Hour>
        <Hour>10am</Hour>
        <Hour>11am</Hour>
        <Hour>12pm</Hour>
        <Hour>1pm</Hour>
        <Hour>2am</Hour>
        <Hour>3am</Hour>
        <Hour>4am</Hour>
        <Hour>5am</Hour>
        <Hour>6am</Hour>
        <Hour>7am</Hour>
        <Hour>8am</Hour>
        <Hour>9am</Hour>
        <Hour>10am</Hour>
        <Hour>11am</Hour>
        <Hour>12am</Hour>

      </Time>
      <Schedules>
        <div>24</div>
        <div style={{border:"1px solid black"}}>1</div>
        <div style={{border:"1px solid black"}}>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
        <div>16</div>
        <div>17</div>
        <div>18</div>
        <div>19</div>
        <div>20</div>
        <div>21</div>
        <div>22</div>
        <div>23</div>
        <div>24</div>
      </Schedules>
    </Wrapper>
  );
}



