import { PUBLIC_FB_APIKEY, PUBLIC_FB_AUTHDOMAIN, PUBLIC_FB_PROJECTID,
  PUBLIC_FB_STORAGEBUCKET, PUBLIC_FB_MESSAGINGSENDERID, PUBLIC_FB_APPID,
  PUBLIC_MEASUREMENTID } from '$env/static/public'
import type { FirebaseApp } from 'firebase/app'
import type { Firestore } from 'firebase/firestore'
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: PUBLIC_FB_APIKEY,
  authDomain: PUBLIC_FB_AUTHDOMAIN,
  projectId: PUBLIC_FB_PROJECTID,
  storageBucket: PUBLIC_FB_STORAGEBUCKET,
  messagingSenderId: PUBLIC_FB_MESSAGINGSENDERID,
  appId: PUBLIC_FB_APPID,
  measurementId : PUBLIC_MEASUREMENTID
}

export const getDb: () => Firestore = () => {
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
  const db = getFirestore(app)
	return db
}
