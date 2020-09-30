import React from 'react';
import { connect } from 'react-redux';

import styles from './UserProfile.module.scss';

const UserProfile = ({ currentUser }) => {
  const { displayName, email, createdAt, photoURL } = currentUser;

  return (
    <>
      <h1>UserProfile</h1>
      <div className={styles.profile}>
        <img className={styles.photo} alt='userPhoto' src={photoURL}></img>
        <div className={styles.detail}>
          <p>{`Display Name : ${displayName}`}</p>
          <p>{`Email : ${email}`}</p>
          <p>{`CreatedAt : ${createdAt}`}</p>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, null)(UserProfile);
