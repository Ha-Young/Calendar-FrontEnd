import React from "react";
import styles from "./Column.module.css";

function Column() {
  const nums = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      {nums.map((num) => {
        return (
          <div 
            key={num}
            className={styles.column}
            data-id={num}>
          </div>
        );
      })}
    </>
  );
}

export default Column;


// function Column() {
//   const nums = [1, 2, 3, 4, 5, 6, 7];

//   return(
//     <>
//       {nums.map((num) => {
//         return(
//           <div className={styles.column} key={num} data-id={num}>
//             <Row />
//           </div>
//         );
//       })}
//     </>
//   );
// }
