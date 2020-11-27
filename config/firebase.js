import firebase from 'firebase';
import 'firebase/auth';
//import 'firebase/database';
var firebaseConfig = {
          apiKey: "AIzaSyA9JHFUJlk6_nPLO96m0gM6rnHhnPGqkq8",
          authDomain: "olx-react-aee72.firebaseapp.com",
          databaseURL: "https://olx-react-aee72.firebaseio.com",
          projectId: "olx-react-aee72",
          storageBucket: "olx-react-aee72.appspot.com",
          messagingSenderId: "1091103480965",
          appId: "1:1091103480965:web:1f88b9667280f832585dec",
          measurementId: "G-VTF3L0BRXV"
         };


 
// //   // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;


  