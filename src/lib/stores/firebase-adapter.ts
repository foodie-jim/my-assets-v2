import { initializeApp } from 'firebase/app';
import type { FirebaseOptions } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
	getFirestore,
	collection,
	onSnapshot,
	addDoc,
	deleteDoc,
	doc,
	query,
	where,
	orderBy,
	serverTimestamp,
	updateDoc
} from 'firebase/firestore';

const config: FirebaseOptions = {
	apiKey: 'AIzaSyAY7s8rOfi7RtefH3SvSSFn8g3u8wuOTks',
	authDomain: 'my-assets-firebase.firebaseapp.com',
	projectId: 'my-assets-firebase',
	storageBucket: 'my-assets-firebase.appspot.com',
	messagingSenderId: '825923356513',
	appId: '1:825923356513:web:e97fc4703fe902ac012720'
};

initializeApp(config);

const db = getFirestore();
const auth = getAuth();

export { db, auth };
