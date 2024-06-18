// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; //import gambar dan file

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyZCKXmWDXtFO2-ozCCDi-CQn-Ox-WGrg",
  authDomain: "store-tutorial-36872.firebaseapp.com",
  projectId: "store-tutorial-36872",
  storageBucket: "store-tutorial-36872.appspot.com",
  messagingSenderId: "27126026802",
  appId: "1:27126026802:web:73e8eb9d63e3de9654a22b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);