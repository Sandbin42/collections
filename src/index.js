import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyApRp_ytOl5riinIqgCL5WicXx3IRkRY_U",
  authDomain: "collections-acc91.firebaseapp.com",
  databaseURL: "https://collections-acc91.firebaseio.com",
  projectId: "collections-acc91",
  storageBucket: "",
  messagingSenderId: "381932584986"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
