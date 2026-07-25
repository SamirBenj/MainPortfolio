import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { analytics, firebaseApp } from "./firebase";
import { logEvent } from "firebase/analytics";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  increment,
  setDoc,
} from "firebase/firestore";

const trackVisit = async () => {
  logEvent(analytics, "page_view", {
    page_title: "Homepage",
    page_location: window.location.href,
  });

  const db = getFirestore(firebaseApp);
  const visitsRef = doc(db, "visits", "count");

  try {
    const docSnapshot = await getDoc(visitsRef);
    if (!docSnapshot.exists()) {
      await setDoc(visitsRef, { count: 0 });
    }

    await updateDoc(visitsRef, {
      count: increment(1),
    });
  } catch (error) {
    console.error("Error updating visit count:", error);
  }
};

// Track visits in production only, not in local dev (see src/firebase.js)
if (import.meta.env.PROD) {
  trackVisit();
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
