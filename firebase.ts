import { getApp,getApps,initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuhbmUMyrg1-nxbOj8OKjsxsjI25FtEqc",
  authDomain: "sri-chat-58312.firebaseapp.com",
  projectId: "sri-chat-58312",
  storageBucket: "sri-chat-58312.appspot.com",
  messagingSenderId: "904666522491",
  appId: "1:904666522491:web:78e764a7301e7b874ed3de"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };