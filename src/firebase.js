import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrvGjq-BvtQdNRsvUkSZi9LCCtGnHgR6A",
  authDomain: "fooodes-81ac4.firebaseapp.com",
  projectId: "fooodes-81ac4",
  storageBucket: "fooodes-81ac4.firebasestorage.app",
  messagingSenderId: "866961405892",
  appId: "1:866961405892:web:2a1c07ad0f022974f91691",
  measurementId: "G-XNQDK41ZF2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider =
  new GoogleAuthProvider();