import firebase from 'firebase/compat/app';
import '@firebase/compat/auth';
import '@firebase/storage';
import 'firebase/firestore';
import 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyCdJCC-aQVmUXbv8VgPoGmBL9LmxqN4cq8",
    authDomain: "profilia-a3d62.firebaseapp.com",
    projectId: "profilia-a3d62",
    storageBucket: "profilia-a3d62.appspot.com",
    messagingSenderId: "850257159640",
    appId: "1:850257159640:web:23ac11aac95b3ea7e6bead",
    measurementId: "G-RBV62R9M5R"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();