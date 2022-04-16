// v9 compat packages are API compatible with v8 code
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
	apiKey: 'AIzaSyD-i029wSpHx4WzfJRSO2QNCLo8tuyw7Rs',
	authDomain: 'linkedin-clone-97b66.firebaseapp.com',
	projectId: 'linkedin-clone-97b66',
	storageBucket: 'linkedin-clone-97b66.appspot.com',
	messagingSenderId: '1065731199542',
	appId: '1:1065731199542:web:0c9384dbef596f0138fe97',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

const auth = firebase.auth();

export { db, auth };
