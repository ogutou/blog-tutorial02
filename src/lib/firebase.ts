// firebase.tsx

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { auth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyB6R6lIQQ1768HEDSz7m3_K3zpij1Z0fGw",
  authDomain: "blog-tutorial-2100f.firebaseapp.com",
  projectId: "blog-tutorial-2100f",
  storageBucket: "blog-tutorial-2100f.firebasestorage.app",
  messagingSenderId: "824377706308",
  appId: "1:824377706308:web:a836448d05c35fc5cdf911",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const auth = getAuth(app);

export { auth, db };
