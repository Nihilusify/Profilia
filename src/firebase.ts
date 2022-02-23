import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCdJCC-aQVmUXbv8VgPoGmBL9LmxqN4cq8",
    authDomain: "profilia-a3d62.firebaseapp.com",
    projectId: "profilia-a3d62",
    storageBucket: "profilia-a3d62.appspot.com",
    messagingSenderId: "850257159640",
    appId: "1:850257159640:web:23ac11aac95b3ea7e6bead",
    measurementId: "G-RBV62R9M5R"
};

export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);