// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBaw410tGHgYO5GEoR9hJQauiriDGEYLr4",
    authDomain: "genius-car-services-shaahil.firebaseapp.com",
    projectId: "genius-car-services-shaahil",
    storageBucket: "genius-car-services-shaahil.appspot.com",
    messagingSenderId: "998810450893",
    appId: "1:998810450893:web:268b66c30abcae511ba284"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
