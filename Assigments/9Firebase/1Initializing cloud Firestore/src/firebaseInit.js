// create firebase config here and export the db object
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//this is to indicate that we are using firebase clod
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9WfWjeEG89ykayu7JAzy_Mw6SRKN_B6I",
  authDomain: "blogging-app-be857.firebaseapp.com",
  projectId: "blogging-app-be857",
  storageBucket: "blogging-app-be857.appspot.com",
  messagingSenderId: "585582505945",
  appId: "1:585582505945:web:dd2a0f3147cf296ee433c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);