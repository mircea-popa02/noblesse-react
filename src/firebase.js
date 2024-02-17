// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCh4Jhx3ic7h9v3swT6ZWaozfq0q5ODMFo",
    authDomain: "noblesse-2f13a.firebaseapp.com",
    projectId: "noblesse-2f13a",
    storageBucket: "noblesse-2f13a.appspot.com",
    messagingSenderId: "158502024456",
    appId: "1:158502024456:web:875240f1a85ed0a3b168bd",
    measurementId: "G-B7R5746QGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);