import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const app = initializeApp({
  apiKey: "AIzaSyBIuWJU1SxQ2Ud1WHCh3i6GLmUvVwBdMUg",
  authDomain: "fir-react-d0c97.firebaseapp.com",
  projectId: "fir-react-d0c97",
  storageBucket: "fir-react-d0c97.appspot.com",
  messagingSenderId: "784613429432",
  appId: "1:784613429432:web:0b419d53d6a47eeebf644d"
});

export const auth = getAuth(app);
export default app;
