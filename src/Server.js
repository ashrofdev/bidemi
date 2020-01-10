import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCGoZL7tKedjVOPbAZ4_e86hR7W4uriyuY",
    authDomain: "awe-ch.firebaseapp.com",
    databaseURL: "https://awe-ch.firebaseio.com",
    projectId: "awe-ch",
    storageBucket: "awe-ch.appspot.com",
    messagingSenderId: "734845123255",
    appId: "1:734845123255:web:78917230aab03288226b32",
    measurementId: "G-SRDTGZ5MF3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 export const firebaseDB = firebase.database()

 export const storage = firebase.storage()
 
 