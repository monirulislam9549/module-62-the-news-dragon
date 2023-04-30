// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5o75Wmb7eeE_wA0oY_4zQP0qSP547qCI",
    authDomain: "the-news-dragon-c9edb.firebaseapp.com",
    projectId: "the-news-dragon-c9edb",
    storageBucket: "the-news-dragon-c9edb.appspot.com",
    messagingSenderId: "1047478428211",
    appId: "1:1047478428211:web:565d95aac54ad3732cf946"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;