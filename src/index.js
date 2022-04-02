import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAhsrLEx45khDkDgVOiUqNDNSpYsPArMjI",
  authDomain: "cart-ef06e.firebaseapp.com",
  projectId: "cart-ef06e",
  storageBucket: "cart-ef06e.appspot.com",
  messagingSenderId: "205786382583",
  appId: "1:205786382583:web:3f4e61dbf75eabe9c993f2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

