import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDPRGqK7RZZTmjnrDc1nYz9xN7MzoUTCKU",
    authDomain: "movieapp-659f3.firebaseapp.com",
    projectId: "movieapp-659f3",
    storageBucket: "movieapp-659f3.appspot.com",
    messagingSenderId: "619387833366",
    appId: "1:619387833366:web:dcaef3d0f57259b2c1b937",
    measurementId: "G-PKKHSXXR52"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();

  export default storage;