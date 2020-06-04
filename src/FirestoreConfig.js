import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCS5afX4X0hzo1sGw-ZzoPoVD2H6clOmNI",
    authDomain: "encuentra-e2a48.firebaseapp.com",
    databaseURL: "https://encuentra-e2a48.firebaseio.com",
    projectId: "encuentra-e2a48",
    storageBucket: "encuentra-e2a48.appspot.com",
    messagingSenderId: "504040823163",
    appId: "1:504040823163:web:8bb8eb4a5ff98ceaaac5de",
    measurementId: "G-WT8DMQXQTR"

});

let db = firebase.firestore();
db.settings({ timestampsInSnapshots = true });

export default db;