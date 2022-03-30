import { db, auth } from '$stores/firebase-adapter';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged
} from 'firebase/auth';
import { writable } from 'svelte/store';
import type { User } from 'firebase/auth';
import type { Writable } from 'svelte/store';

const currentUserStore: Writable<User> = writable(null);

const signInUser = (email: string, password: string) => {
	return signInWithEmailAndPassword(auth, email, password)
		.then((cred) => {
			currentUserStore.set(<User>cred.user);
			console.info(`[user-store] User ${cred.user.email} signed in.`);
		})
		.catch((err) => {
			currentUserStore.set(null);
			console.error(err.message);
		});
};

const signOutUser = () => {
	return signOut(auth)
		.then(() => {
			console.log('[user-store] User sign out.');
		})
		.catch((err) => {
			console.log(err.message);
		});
};

export { signInUser, signOutUser, currentUserStore };
