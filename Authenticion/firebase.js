import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged, sendEmailVerification, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyClGjUEM1ZFaaPWtNrm9auRJWZ_iVhc0R8",
  authDomain: "fir-project-b811d.firebaseapp.com",
  projectId: "fir-project-b811d",
  storageBucket: "fir-project-b811d.appspot.com",
  messagingSenderId: "961312551768",
  appId: "1:961312551768:web:5de55f3635c27a1eb8eb2d",
  measurementId: "G-5LTCJ1HPMK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth ,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signOut }