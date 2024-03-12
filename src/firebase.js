import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB9kJOyWzG4bEZFuax4jvrP1t4T9NW0Tmc",
    authDomain: "assignment-5cf9b.firebaseapp.com",
    projectId: "assignment-5cf9b",
    storageBucket: "assignment-5cf9b.appspot.com",
    messagingSenderId: "791871868077",
    appId: "1:791871868077:web:ebcf07a9369a175bd8ca24"
  };
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  const storage = firebase.storage();
  const firestore = firebase.firestore();
  
  export { storage, firestore, firebase }; 
    
