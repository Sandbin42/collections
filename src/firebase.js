import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyApRp_ytOl5riinIqgCL5WicXx3IRkRY_U",
  authDomain: "collections-acc91.firebaseapp.com",
  databaseURL: "https://collections-acc91.firebaseio.com",
  projectId: "collections-acc91",
  storageBucket: "",
  messagingSenderId: "381932584986"
};
firebase.initializeApp(config);

export default firebase;
