import React from 'react';

import styles from './UserProfile.module.scss';

export default function UserProfile({ user }) {
  return (
    <div className={styles.UserProfile}>
      <h1>UserProfile</h1>
      <div className={styles.profile}>
        <img className={styles.photo} alt='userPhoto' src={user.photoURL}></img>
        <div className={styles.detail}>
          <p>{`Display Name : ${user.displayName}`}</p>
          <p>{`Email : ${user.email}`}</p>
          <p>{`CreatedAt : ${user.createdAt}`}</p>
        </div>
      </div>
    </div>
  );
}
