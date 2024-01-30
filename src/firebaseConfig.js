import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAM6P86uQmvYd79OGGq5Qcg3ALzl_TPV3Q",
  authDomain: "prioritygiftcards.firebaseapp.com",
  projectId: "prioritygiftcards",
  storageBucket: "prioritygiftcards.appspot.com",
  messagingSenderId: "720882070102",
  appId: "1:720882070102:web:d06f55f0808931397681f7",
  measurementId: "G-BB0JMF8M75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
