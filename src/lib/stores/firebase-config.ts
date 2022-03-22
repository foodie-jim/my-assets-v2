import { initializeApp } from 'firebase/app';
import type { FirebaseApp, FirebaseOptions } from 'firebase/app';

export class FirebaseConfig {
	private readonly config: FirebaseOptions = {
		apiKey: 'AIzaSyAY7s8rOfi7RtefH3SvSSFn8g3u8wuOTks',
		authDomain: 'my-assets-firebase.firebaseapp.com',
		projectId: 'my-assets-firebase',
		storageBucket: 'my-assets-firebase.appspot.com',
		messagingSenderId: '825923356513',
		appId: '1:825923356513:web:e97fc4703fe902ac012720'
	};

	private app: FirebaseApp = null;

	public getFirebaseApp = () => {
		if (!this.app) {
			this.app = initializeApp(this.config);
		}

		return this.app;
	};
}
