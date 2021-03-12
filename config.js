import * as firebase from 'firebase';

require('@firebase/firestore');
var firebaseConfig = {
    apiKey: "AIzaSyBh77y1DaqEAVzj7NKKIKEEJcoLLpncw0g",
    authDomain: "willy-59c3e.firebaseapp.com",
    databaseURL: "https://willy-59c3e.firebaseio.com",
    projectId: "willy-59c3e",
    storageBucket: "willy-59c3e.appspot.com",
    messagingSenderId: "545698082417",
    appId: "1:545698082417:web:636c8353569247f19535d0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();