// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAR2y_FQkkQS21hQ-J1QxH8vWNvkOfK7zw",
    authDomain: "overture-scouting-app.firebaseapp.com",
    databaseURL: "https://overture-scouting-app-default-rtdb.firebaseio.com",
    projectId: "overture-scouting-app",
    storageBucket: "overture-scouting-app.appspot.com",
    messagingSenderId: "372276289782",
    appId: "1:372276289782:web:1f85f741ff131ab2fd0cd7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
