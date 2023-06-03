import { initializeApp} from 'firebase/app';
import { getAuth,GoogleAuthProvider} from 'firebase/auth';

// This page is for Firebase connectivity

import {
  getFirestore,collection
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyALuvTmI_B42ltwTVRLe1JpLf5cqeCFdfc",
  authDomain: "hunger-halt.firebaseapp.com",
  databaseURL: "https://hunger-halt-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hunger-halt",
  storageBucket: "hunger-halt.appspot.com",
  messagingSenderId: "321787485158",
  appId: "1:321787485158:web:f609b97bd4496047051427",
  measurementId: "G-R7ZBMRW41D"
};
  const app=initializeApp(firebaseConfig);
  export const db=getFirestore();
  export const refer= collection(db,'users')
  export const auth=getAuth(app); 

  export const googleProvider = new GoogleAuthProvider()

