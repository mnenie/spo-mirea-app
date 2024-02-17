import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE,
  authDomain: "tinder-1ed73.firebaseapp.com",
  projectId: "tinder-1ed73",
  storageBucket: "tinder-1ed73.appspot.com",
  messagingSenderId: "887682132892",
  appId: "1:887682132892:web:efbc8434a4c9bf6fcf7659"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default firebaseConfig