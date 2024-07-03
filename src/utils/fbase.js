import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp, collection } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK_49QorUNRquW7Zx6f61v2aZ4WHnJp7g",
  authDomain: "xnbeats-f5b3d.firebaseapp.com",
  projectId: "xnbeats-f5b3d",
  storageBucket: "xnbeats-f5b3d.appspot.com",
  messagingSenderId: "634848378973",
  appId: "1:634848378973:web:4240411bd9a0f4c8ec8db4",
  measurementId: "G-G0K47RMPEN"
};

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
//   authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_REACT_APP_APP_ID,
//   measurementId: import.meta.env.VITE_REACT_APP_MEASUREMENT_ID,
// };
// init firebase app

export default initializeApp(firebaseConfig);

// init services
export const db = getFirestore();
export const updated_at_timestamp = serverTimestamp();
export const usersCollection = collection(db, 'users');

export const auth = getAuth();

// https://firebase.google.com/docs/storage/web/create-reference
// export const storage = getStorage();
// export const storageRef = ref(storage);