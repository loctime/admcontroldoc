import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Configuración directa, sin variables de entorno
const firebaseConfig = {
  apiKey: "AIzaSyD1Xx2EigerPuuSiAJit6fsv85IAasTlIw",
  authDomain: "controldoc-a25a9.firebaseapp.com",
  projectId: "controldoc-a25a9",
  storageBucket: "controldoc-a25a9.appspot.com",
  messagingSenderId: "969457058914",
  appId: "1:969457058914:web:20388b990538e524d7fd3b",
  measurementId: "G-ABC123DEF4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// Analytics solo en cliente y si es soportado
export const analytics =
  typeof window !== "undefined"
    ? await isSupported().then(supported => supported ? getAnalytics(app) : null)
    : null;

export default app;