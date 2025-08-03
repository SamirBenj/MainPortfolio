import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  increment,
  setDoc,
} from "firebase/firestore";

const initializeFirebase = () => {
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app); // Initialize Analytics

  // Log a page view event (e.g., on page load)
  logEvent(analytics, "homepage");
  logEvent(analytics, "page_view", {
    page_title: "Homepage",
    page_location: window.location.href,
  });

  const browserInfo = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.userAgentData?.platform || navigator.platform,
    date: new Date().toISOString(), // Date actuelle
  };
  const db = getFirestore(app);

  const updateVisitCount = async () => {
    const visitsRef = doc(db, "visits", "count"); // Chemin: collection "visits", document "count"

    try {
      // Vérifier si le document existe
      const docSnapshot = await getDoc(visitsRef);
      if (!docSnapshot.exists()) {
        // Si le document n'existe pas, le créer avec un champ `count` à 0
        await setDoc(visitsRef, { count: 0 });
      }

      const docRef = doc(db, "browserInfo", `${Date.now()}`);
      await setDoc(docRef, browserInfo);

      // Incrémenter le champ `count`
      await updateDoc(visitsRef, {
        count: increment(1),
      });

      console.log("Visit count incremented successfully.");
    } catch (error) {
      console.error("Error updating visit count:", error);
    }
  };

  updateVisitCount();
};

// Call the function to initialize Firebase
initializeFirebase();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
