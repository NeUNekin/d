import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import 'firebase/firestore'


const config = {
	apiKey: "AIzaSyB5O-fx0m6JnpkhiN-EYcFjT0mge9E_6xs",
    authDomain: "mini-project-food-blogs.firebaseapp.com",
    databaseURL: "https://mini-project-food-blogs.firebaseio.com",
    projectId: "mini-project-food-blogs",
    storageBucket: "mini-project-food-blogs.appspot.com",
    messagingSenderId: "416980873563",
  	appId: "1:416980873563:web:21922f26235b4151f3ea7e",
  	measurementId: "G-QK94HX0VM8"
};

class Firebase {
	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		this.db = app.firestore()
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
	}

	addQuote(quote) {
		if(!this.auth.currentUser) {
			return alert('Not authorized')
		}

		return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
			quote
		})
	}

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}

	async getCurrentUserQuote() {
		const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
		return quote.get('quote')
	}
}

export default new Firebase()