// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATJ-ecsuuE7T4JZswaXGAQG_sHhhH4V0M",
    authDomain: "recipe-app-f72fa.firebaseapp.com",
    projectId: "recipe-app-f72fa",
    storageBucket: "recipe-app-f72fa.appspot.com",
    messagingSenderId: "230151211591",
    appId: "1:230151211591:web:c2448c1edf2abbc74cff62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app); // Initialize Firebase Storage

// Export the services to be used in other components
export { auth, firestore, storage };
