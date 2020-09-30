import React, { useState } from 'react';
import firebase from 'firebase/app';
import styles from './LogIn.module.css';
import { FcGoogle } from 'react-icons/fc';
import { SiGooglecalendar } from 'react-icons/si';
import CalendarContainer from '../../containers/CalendarContainer';

export default function LogIn () {
  const userState = {
    isLogIn: false,
    name: '',
    email: '',
    photo: '',
  };

  const [logInResult, setLogInResult] = useState(userState);

  const signIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        // const token = result.credential.accessToken;
        const user = result.user;
        console.log(user, "누구?");
        console.log("Login Success");
      })
      .catch((error) => {
        console.log(error);
      });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setLogInResult({
          isLogIn: true,
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        });
      } else {
        console.log("User signed in");
      }
    });
  };

  console.log(logInResult.isLogIn, "로그인했어?")

  return (
    <div className={styles.container}>
      {logInResult.isLogIn
      ? <CalendarContainer />
      : <div className={styles.contents}>
          <div className={styles.title}>
            Coogle Calendar
            <SiGooglecalendar className={styles.calendar_logo} />
          </div>
          <button className={styles.login_btn} onClick={signIn}>
            <FcGoogle className={styles.google_logo} />
            Sign in with Coogle
          </button>
        </div>
      }
    </div>
  );
}

// const mapStateToProps = state => {
//   const { visibilityFilter } = state;
//   const login = loginReducer(state, visibilityFilter);
//   return { login };
// };

// export default connect(mapStateToProps)(LogIn);

// export const searchYoutube = async (options) => {
//   const YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&part=snippet${mapObjectToQueryStrings(
//     options
//   )}`;

//   try {
//     const res = await fetch(YOUTUBE_URL);
//     const data = await res.json();

//     return data;

//   } catch (err) {
//     console.error(err);
//   }
// };

// useEffect(() => {
//   if (inputValue.length) {
//     setPopularCount(COUNT);
//     return;
//   }

//   (async () => {
//     try {
//       const popularResult = await fetchPopularYoutube(apiParams.popular);
//       setVideoInfos([...popularResult.items]);

//     } catch (err) {
//       alert(err);
//     }
//   })();
// }, [inputValue, popularCount]);