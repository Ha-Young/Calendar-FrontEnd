import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

firebase.initializeApp(firebaseConfig);

// let userId = 0;
// const [value, setValue] = useState('');
// const [textList, setTextList] = useState([])

// useEffect(() => {
//   const starCountRef = firebase.database().ref("users/");
//   starCountRef.on("value", function (snapshot) {
//     setTextList(Object.values(snapshot.val()));

//   });
// }, [])



// //ref 다음이 폴더구조가 된다. 디렉토리 구조.. 디렉토리에 따른 참조

// function writeUserData(text) {
//   userId++
//   firebase.database().ref('users/' + userId).set({
//     // username: name,
//     // email: email,
//     // profile_picture : imageUrl
//     text
//   });
// }

// function storeText () {
//   writeUserData(value);
//   setValue('');
// }


export default firebase;
