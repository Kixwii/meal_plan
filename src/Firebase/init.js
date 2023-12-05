// Import the functions you need from the SDKs you need
import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk_Uf4Y8nLtWnerz4LhA9IAPgssP1RFVI",
  authDomain: "introtofirebase-3db1f.firebaseapp.com",
  projectId: "introtofirebase-3db1f",
  storageBucket: "introtofirebase-3db1f.appspot.com",
  messagingSenderId: "803736724437",
  appId: "1:803736724437:web:c19067c8ad60787e7e135c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
export default db 
export const auth = getAuth();