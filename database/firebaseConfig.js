import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrzGNEKJdpwps8T8zEGVbee90kpWlf_rE",
  authDomain: "imagigram-d632e.firebaseapp.com",
  projectId: "imagigram-d632e",
  storageBucket: "imagigram-d632e.appspot.com",
  messagingSenderId: "358549700510",
  appId: "1:358549700510:web:7c7a8cbe67255fc510208f"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);