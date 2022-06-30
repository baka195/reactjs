import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const fireconfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_DOMAIN,
    databaseURL: process.env.FIREBASE_DBURL,
    projectId: "baka-bio",
    storageBucket: process.env.FIREBASE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MSID,
    appId: process.env.FIREBASE_APPID,
    measurementId: process.env.FIREBASE_MID
};
const app = initializeApp(fireconfig);
export const db = getFirestore(app);