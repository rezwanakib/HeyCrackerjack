import app from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAIJpSo4Lrb3W9AjZd0kVF72DE002T17Ys",
  authDomain: "crackerjack-4add6.firebaseapp.com",
  projectId: "crackerjack-4add6",
  storageBucket: "crackerjack-4add6.appspot.com",
  messagingSenderId: "151764065372",
  appId: "1:151764065372:web:0ebc74071459ff89b79a99"
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
export {firebase,firestore,app}