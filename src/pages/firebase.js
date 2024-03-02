// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8MNPPQ3s7moBKFnUg7F_gywVUkRZ6xLk",
  authDomain: "stress-free-bgm.firebaseapp.com",
  projectId: "stress-free-bgm",
  storageBucket: "stress-free-bgm.appspot.com",
  messagingSenderId: "308268148325",
  appId: "1:308268148325:web:8e51b8df54885e593ec88c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export default auth
export {provider} 