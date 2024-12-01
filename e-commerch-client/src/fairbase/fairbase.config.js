// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyACJMFoNKo6DVfBlIymVNqXBGD4VAWs5eQ",
//   authDomain: "bistro-boss-e6667.firebaseapp.com",
//   projectId: "bistro-boss-e6667",
//   storageBucket: "bistro-boss-e6667.firebasestorage.app",
//   messagingSenderId: "324430337940",
//   appId: "1:324430337940:web:1873ca7b5353e5bbb16181"

apiKey: import.meta.env.VITE_apiKey ,
authDomain: import.meta.env.VITE_authDomain ,
projectId: import.meta.env.VITE_projectId ,
storageBucket: import.meta.env.VITE_storageBucket ,
messagingSenderId: import.meta.env.VITE_messagingSenderId ,
appId: import.meta.env.VITE_appId 
};

console.log(firebaseConfig);
// Initialize Firebase
export const app = initializeApp(firebaseConfig);