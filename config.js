import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCbe8z_1FyDh_ouI1aO9r0XAr4Fzirkto4",
    authDomain: "wily-app-e37b6.firebaseapp.com",
    databaseURL: "https://wily-app-e37b6-default-rtdb.firebaseio.com",
    projectId: "wily-app-e37b6",
    storageBucket: "wily-app-e37b6.appspot.com",
    messagingSenderId: "629120144130",
    appId: "1:629120144130:web:b3bfef284e444bde4a281b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()