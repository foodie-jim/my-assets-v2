import { db, auth } from '$stores/firebase-adapter';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged
} from 'firebase/auth';

export class Login {
	constructor() {
		console.info(`${this.constructor.name} is created`);
	}

	testlogin() {
		signInWithEmailAndPassword(auth, 'hjman.kim@gmail.com', 'password1234')
			.then((cred) => {
				console.log('user logged in:', cred.user);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}
}
