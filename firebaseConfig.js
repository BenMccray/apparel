// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // If you're using Firestore
import { initializeAuth } from "firebase/auth"; // If you're using Firebase Authentication
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getReactNativePersistence } from "@react-native-firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYU6HKQebev7uFRiRg0YMgDEbLyZ3iq5o",
  authDomain: "apparel-c18a6.firebaseapp.com",
  projectId: "apparel-c18a6",
  databaseURL: '',
  storageBucket: "apparel-c18a6.firebasestorage.app",
  messagingSenderId: "694356706221",
  appId: "1:694356706221:android:f7207ba027bf7d16191724",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, /**{
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
}*/);