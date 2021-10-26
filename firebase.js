import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDQt-IBgjeVqyMJ-1KSs0jaBxgmZcySg-o",
  authDomain: "engapp-662e4.firebaseapp.com",
  projectId: "engapp-662e4",
  storageBucket: "engapp-662e4.appspot.com",
  messagingSenderId: "52867540765",
  appId: "1:52867540765:web:1591655c0410e8c126e3f4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};