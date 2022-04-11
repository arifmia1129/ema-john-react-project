import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyEUvnsHYvKEBAgxIXfOGLGjANspAK2dc",
    authDomain: "ema-john-bfc94.firebaseapp.com",
    projectId: "ema-john-bfc94",
    storageBucket: "ema-john-bfc94.appspot.com",
    messagingSenderId: "551811087246",
    appId: "1:551811087246:web:78b13978f047c53edf82df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;