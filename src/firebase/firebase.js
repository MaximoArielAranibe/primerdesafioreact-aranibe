// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC8DCApHortvyQQkNkbqPw-OORliU2wtBM",
	authDomain: "suplementosvitalsport.firebaseapp.com",
	projectId: "suplementosvitalsport",
	storageBucket: "suplementosvitalsport.appspot.com",
	messagingSenderId: "840003509318",
	appId: process.env.REACT_APP_API_KEY,
	measurementId: "G-FVG0XFJN5Y"
};

const apiKey = process.env.REACT_APP_API_KEY;
console.log(apiKey);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function readAll(){
	const items = [];
	const querySnapshot = await getDocs(collection(db,"numberOfCart"));
	querySnapshot.forEach((doc) => {
		items.push({id: doc.id, data: doc.data() });
	})
	return items;
}