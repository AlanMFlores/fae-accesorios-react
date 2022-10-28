import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA-mep7ZQzty6OM-BTsJizFZ6ztRcOE57w",
  authDomain: "fae-accesorios-react.firebaseapp.com",
  projectId: "fae-accesorios-react",
  storageBucket: "fae-accesorios-react.appspot.com",
  messagingSenderId: "696739940198",
  appId: "1:696739940198:web:133ec24badd66e3b28eaa7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);