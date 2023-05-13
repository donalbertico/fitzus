import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// import { FB_APIKEY, FB_AUTHDOMAIN, FB_PROJECTID,
//   FB_STORAGEBUCKET, FB_MESSAGINGSENDERID, FB_APPID, MEASUREMENTID } from '$env/static/private';

const firebaseConfig = {
  apiKey: "AIzaSyCUFem3EouKYI9dMtb5Rf5kYqqEh79WMNI",
  authDomain: "fitzus-c28c7.firebaseapp.com",
  projectId: "fitzus-c28c7",
  storageBucket: "fitzus-c28c7.appspot.com",
  messagingSenderId: "385093878055",
  appId: "1:385093878055:web:731979e14d9ff7fd84a902",
  measurementId: "G-7GQNXHV4HQ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
