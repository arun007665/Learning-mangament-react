import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBY_lWg3sBzk-4xL-R_ODsUT6W6TQrHFys",
    authDomain: "learning-management-syst-afc94.firebaseapp.com",
    databaseURL: "https://learning-management-syst-afc94-default-rtdb.firebaseio.com",
    projectId: "learning-management-syst-afc94",
    storageBucket: "learning-management-syst-afc94.appspot.com",
    messagingSenderId: "638048520902",
    appId: "1:638048520902:web:0d0d191aade0edc644e5c7",
    measurementId: "G-7TYWNT4BV9"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };