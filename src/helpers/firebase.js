import Vue from 'vue';

import firebase from 'firebase/app';
import 'firebase/firebase-auth';

import * as firebaseui from 'firebaseui';

const firebaseConfig = {
    apiKey: "AIzaSyBMSxMUkvCNwp1k2Jed5fYvEO53O5Jlnk8",
    authDomain: "loginproject-d58db.firebaseapp.com",
    databaseURL: "https://loginproject-d58db.firebaseio.com",
    projectId: "loginproject-d58db",
    storageBucket: "loginproject-d58db.appspot.com",
    messagingSenderId: "228747030840",
    appId: "1:228747030840:web:5a57aac526d050f7c791cd"
  };
  
  firebase.initializeApp(firebaseConfig);

  const ui = new firebaseui.auth.AuthUI(firebase.auth());

  Vue.prototype.$firebase = firebase;
  Vue.prototype.$firebaseui = ui;
