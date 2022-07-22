import firebase from "firebase";
import ('firebase/firestore');

const apiKey = process.env.REACT_APP_API_KEY || "AIzaSyDvlD_AVPR9KMG0NTYB06PQ2jE8O93bS94";
const authDomain = process.env.REACT_APP_AD || "akidev-portifolio.firebaseapp.com";
const projectId = process.env.REACT_APP_PID || "akidev-portifolio";
const storageBucket = "akidev-portifolio.appspot.com";


firebase.initializeApp({
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket

})

const db = firebase.firestore()

export default db