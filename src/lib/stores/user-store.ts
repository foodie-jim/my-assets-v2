import { auth } from '$stores/firebase-adapter';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { writable } from 'svelte/store';
import type { UserCredential, User } from 'firebase/auth';
import type { Writable } from 'svelte/store';

const currentUserStore: Writable<User> = writable(null);

const signInUser = async (email: string, password: string) => {
	return signInWithEmailAndPassword(auth, email, password)
		.then((cred: UserCredential) => {
			currentUserStore.set(<User>cred.user);
			console.info(`[user-store] User ${cred.user.email} signed in.`);

			return cred;
		})
		.catch((err) => {
			currentUserStore.set(null);
			console.error(err.message);

			return err;
		});
};

const signOutUser = async () => {
	return signOut(auth)
		.then(() => {
			currentUserStore.set(null);
			console.log('[user-store] User sign out.');
		})
		.catch((err) => {
			console.log(err.message);
		});
};

export { signInUser, signOutUser, currentUserStore };
