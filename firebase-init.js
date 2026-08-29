// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDh2Iy7obJZC1KeCqgsLsv6hlk7Neq2sz0",
  authDomain: "nyange-a54bd.firebaseapp.com",
  projectId: "nyange-a54bd",
  storageBucket: "nyange-a54bd.firebasestorage.app",
  messagingSenderId: "94076120843",
  appId: "1:94076120843:web:27294207efb92242defc0e",
  measurementId: "G-DE93C174W5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
