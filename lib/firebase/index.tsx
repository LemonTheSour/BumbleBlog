
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBTzJf0dtQIE7fOxyQMCEZ5MXDJ8urOyo",
  authDomain: "bridgosblogs.firebaseapp.com",
  projectId: "bridgosblogs",
  storageBucket: "bridgosblogs.appspot.com",
  messagingSenderId: "722713726088",
  appId: "1:722713726088:web:3e609d514faf0ed600233d",
  measurementId: "G-PQFM2RQSV3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);