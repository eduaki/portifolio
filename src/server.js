import firebase from "firebase";
import ('firebase/firestore');

const apiKey = process.env.REACT_APP_API_KEY;
const authDomain = process.env.REACT_APP_AD;
const projectId = process.env.REACT_APP_PID;
const storageBucket = process.env.REACT_APP_SB;


firebase.initializeApp({
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket

})

const db = firebase.firestore()

export default db