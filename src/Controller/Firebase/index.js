import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA_Idp_M3wPaLK0F50Nb47BIa2kLmFXIGM",
    authDomain: "webinar-app-79fc9.firebaseapp.com",
    databaseURL: "https://webinar-app-79fc9.firebaseio.com",
    projectId: "webinar-app-79fc9",
    storageBucket: "webinar-app-79fc9.appspot.com",
    messagingSenderId: "970688168531",
    appId: "1:970688168531:web:3811d8cf46ad3b8e9dbca6",
    measurementId: "G-83GGT69C5Z"
});

const db = firebaseApp.firestore();
const storage = firebaseApp.storage();
const auth = firebaseApp.auth();
export {db, storage, auth};
