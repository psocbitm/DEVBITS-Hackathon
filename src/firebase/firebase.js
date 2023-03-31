import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyATZPY2RS8xQolstc3pdXLwaHalt7v1vDU",
  authDomain: "hackathon-c1d57.firebaseapp.com",
  projectId: "hackathon-c1d57",
  storageBucket: "hackathon-c1d57.appspot.com",
  messagingSenderId: "19899326767",
  appId: "1:19899326767:web:913c7017a7f224162b01da",
  measurementId: "G-HF9RLT8YQX",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;
