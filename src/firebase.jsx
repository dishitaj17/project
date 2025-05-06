// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm5fo22T5DN5Sp-9cfpucfTj-TTprG1oQ",
  authDomain: "choco-app-28163.firebaseapp.com",
  projectId: "choco-app-28163",
  storageBucket: "choco-app-28163.firebasestorage.app",
  messagingSenderId: "523128234384",
  appId: "1:523128234384:web:44464a8d8f32d230179315",
  measurementId: "G-BRWSN933QC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);