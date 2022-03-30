import { db, auth } from '$stores/firebase-adapter';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged
} from 'firebase/auth';

export class UserStore {
	constructor() {
		console.info(`${this.constructor.name} is created`);
	}

	signIn(email, password) {
		signInWithEmailAndPassword(auth, email, password)
			.then((cred) => {
				console.log('user logged in:', cred.user);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}
}
