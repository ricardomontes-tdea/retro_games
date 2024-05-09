import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBw5vPIYz3H3LsLdAmB6vbAJfQgsFXvvuw",
  authDomain: "retro-games-66179.firebaseapp.com",
  projectId: "retro-games-66179",
  storageBucket: "retro-games-66179.appspot.com",
  messagingSenderId: "768472359137",
  appId: "1:768472359137:web:a1cbbca0abf7eddd0a17a0"
};


export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);