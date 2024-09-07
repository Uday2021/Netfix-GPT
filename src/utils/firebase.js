// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN_iuX4vpTj9rO3nW3eJFzvmOUq9Wfl5g",
  authDomain: "netflixgpt-f3dd2.firebaseapp.com",
  projectId: "netflixgpt-f3dd2",
  storageBucket: "netflixgpt-f3dd2.appspot.com",
  messagingSenderId: "830696077876",
  appId: "1:830696077876:web:49cdc10594a6b63c996861",
  measurementId: "G-DWD6M6XREX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
