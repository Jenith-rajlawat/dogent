import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAcWlzOVSb8nHGJKuIbEtCpmb4gHSlN8FA",
  authDomain: "database-3f41b.firebaseapp.com",
  projectId: "database-3f41b",
  storageBucket: "database-3f41b.appspot.com",
  messagingSenderId: "606904676526",
  appId: "1:606904676526:web:b372a1014cd424ebcabd3f",
  measurementId: "G-LNGVT2B18G"
};

const app= initializeApp(firebaseConfig);

export const db=getFirestore(app);