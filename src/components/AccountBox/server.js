import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCOMq5L0jsG9vkQpMUPPQrE14Ifb50cAcw",
    authDomain: "cshark-tank.firebaseapp.com",
    projectId: "cshark-tank",
    storageBucket: "cshark-tank.appspot.com",
    messagingSenderId: "885398262619",
    appId: "1:885398262619:web:cda34f9a21df913a23807e",
    measurementId: "G-JT8PPM7F0V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
export default db;