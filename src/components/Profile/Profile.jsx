import React from "react";
import styles from "./Profile.module.css";
import userDefault from "images/userDefault.png";
import { authService } from "api/firebaseService";
import { useHistory } from "react-router-dom";

const Profile = ({
  userData: { displayName, photoURL, email, phoneNumber },
}) => {
  const history = useHistory();
  const handleLogout = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <section className={styles.profileContainer}>
      {photoURL ? (
        <img className={styles.userPhoto} src={photoURL} alt="user profile" />
      ) : (
        <img
          className={styles.userDefault}
          src={userDefault}
          alt="user default"
        />
      )}
      <h3 className={styles.userName}>{displayName}</h3>
      <p className={styles.email}>{email}</p>
      <p className={styles.phoneNumber}>{phoneNumber}</p>
      <button onClick={handleLogout} className={styles.logoutButton}>
        Logout
      </button>
    </section>
  );
};

export default Profile;
