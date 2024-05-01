import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyC8DCApHortvyQQkNkbqPw-OORliU2wtBM",
	authDomain: "suplementosvitalsport.firebaseapp.com",
	projectId: "suplementosvitalsport",
	storageBucket: "suplementosvitalsport.appspot.com",
	messagingSenderId: "840003509318",
	appId: process.env.REACT_APP_API_KEY,
	measurementId: "G-FVG0XFJN5Y"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)




