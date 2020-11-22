import firebase from 'firebase';
import 'firebase/app'
import 'firebase/firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCtG4hwbzUszlzAU8hkbwMkK4qLaTOFgJo",
    authDomain: "reactproject-b58c3.firebaseapp.com",
    databaseURL: "https://reactproject-b58c3.firebaseio.com",
    projectId: "reactproject-b58c3",
    storageBucket: "reactproject-b58c3.appspot.com",
    messagingSenderId: "201379971924",
    appId: "1:201379971924:web:0eff0644953b640266fec1",
    measurementId: "G-ZR66HKC7FE"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;