import React from 'react';
import styles from './Calendar.module.css';

export default function Daily() {

  // 여기서 key를 index 대신해서 사용할만한게 있을까? 단순 div 생성 map..
  // key를 시간으로 하면 좋을듯
  // 데이터 구조에 id속성 추가..
  // 초기스테이트에 시간 배열이 주어진다면..?

  return (
    <div className={styles.table}>
      {[...Array(25)].map((_, index) => {
        return (
          <div key={index} className={styles.item} >
            {index}:00
          </div>
        );
      })}
    </div>
  );
}
