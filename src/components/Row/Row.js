import React from "react";
import styles from "./Row.module.css";
import { connect } from "react-redux";

function Row({ currentDate, ...eventInfo }) {
  const nums = [1, 2, 3, 4, 5, 
                6, 7, 8, 9, 10, 
                11, 12, 13, 14, 
                15, 16, 17, 18, 
                19, 20, 21, 22, 
                23, 24];

  return (
    <>
      {nums.map((num) => {
        if (eventInfo[currentDate]) {
          eventInfo[currentDate].map((info) => {
            if (info.startTime === num) {
              return (
                <div className={styles.pick} key={num} data-id={num}></div>
              );
            }
          });
        }

        return (
          <div className={styles.row} key={num} data-id={num}></div>
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
//   if (eventInfo[currentDate][0].startTime === num) {
//     return (
//       <div className={styles.pick} key={num} data-id={num}></div>
//     );
//   }
// }