import { initializeApp} from 'firebase/app';
import { getAuth,GoogleAuthProvider} from 'firebase/auth';

// This page is for Firebase connectivity

import {
  getFirestore,collection
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBWba1eFv5DhIf1bWG0Xlm6zcZFN0bEqA8",
  authDomain: "hunger-halt-2.firebaseapp.com",
  projectId: "hunger-halt-2",
  storageBucket: "hunger-halt-2.appspot.com",
  messagingSenderId: "1055001047770",
  appId: "1:1055001047770:web:7bc833aaccdfff1065abe3",
  measurementId: "G-VZ600BQP9N"
};
  const app=initializeApp(firebaseConfig);
  export const db=getFirestore();
  export const refer= collection(db,'users')
  export const auth=getAuth(app); 

  export const googleProvider = new GoogleAuthProvider()

