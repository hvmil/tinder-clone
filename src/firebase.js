import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDc2QRBotu8bWeHxEoAJJg-9EX8CSUTafw",
    authDomain: "tinder-clone-d0889.firebaseapp.com",
    projectId: "tinder-clone-d0889",
    storageBucket: "tinder-clone-d0889.appspot.com",
    messagingSenderId: "293278270054",
    appId: "1:293278270054:web:ec4ed8c2470762ae47e3a7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();
  
  export default database;