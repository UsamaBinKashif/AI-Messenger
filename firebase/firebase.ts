import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCPSoAKKzX9IAlKUo5AqGnc-Rq6oNzyS3Y",
  authDomain: "chatgpt-clone-324a0.firebaseapp.com",
  projectId: "chatgpt-clone-324a0",
  storageBucket: "chatgpt-clone-324a0.appspot.com",
  messagingSenderId: "309573387003",
  appId: "1:309573387003:web:fe3403040bcbe6931a665e",
};

//initialize
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

//database
const db = getFirestore(app);
export { db };
