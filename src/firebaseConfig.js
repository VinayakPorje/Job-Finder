// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB45X5tPs8V9ZEaWb_vzr7bOtHTCRCYm_Y",
    authDomain: "job-finder-bd68a.firebaseapp.com",
    projectId: "job-finder-bd68a",
    storageBucket: "job-finder-bd68a.appspot.com",
    messagingSenderId: "829364645166",
    appId: "1:829364645166:web:08263710379fa71dbd1ebf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
