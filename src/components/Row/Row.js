import React from "react";
import styles from "./Row.module.css";
import { connect } from "react-redux";

function Row({ currentDate, ...eventInfo }) {
  const hours = [1, 2, 3, 4, 5, 
                6, 7, 8, 9, 10, 
                11, 12, 13, 14, 
                15, 16, 17, 18, 
                19, 20, 21, 22, 
                23, 24];
  //console.log(eventInfo[currentDate]);
  const dailyEvents = eventInfo[currentDate];

  return (
    <>
      {hours.map((hour) => {
        let isColored = false;
        let text = "";
      
        if (dailyEvents) {
          dailyEvents.map((dailyEvent) => {
            const start = dailyEvent.startTime;
            const end = dailyEvent.endTime;

            if (start <= hour && end >= hour) {
              isColored = true;
              if (start === hour) {
                text = dailyEvent.title;
              }
            }
          });
        }

        return (
          <div className={isColored ? styles.pick : styles.row} key={hour}>{text}</div>
        );
      })}
    </>
  );
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(Row);


//https://stackoverflow.com/questions/25797048/how-to-pass-in-a-react-component-into-another-react-component-to-transclude-the/37982338
//      { children }



// if (eventInfo[currentDate]) {
//   if (eventInfo[currentDate][0].startTime === hour) {
//     return (
//       <div className={styles.pick} key={hour} data-id={hour}></div>
//     );
//   }
// }

// if (eventInfo[currentDate]) {
//   eventInfo[currentDate].map((info) => {
//     if (info.startTime === hour) {
//       return (
//         <div className={styles.pick} key={hour} data-id={hour}></div>
//       );
//     }
//   });
// }