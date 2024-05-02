import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'reactchat-71c47.firebaseapp.com',
  projectId: 'reactchat-71c47',
  storageBucket: 'reactchat-71c47.appspot.com',
  messagingSenderId: '766982751105',
  appId: '1:766982751105:web:9b92e63edf9021129cde80',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
