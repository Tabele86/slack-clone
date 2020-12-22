import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBd2Kr7fQTPjaHTZLL2t8C4Fk-nPbRPhvg',
	authDomain: 'slack-clone-9f54c.firebaseapp.com',
	databaseURL: 'https://slack-clone-9f54c-default-rtdb.firebaseio.com',
	projectId: 'slack-clone-9f54c',
	storageBucket: 'slack-clone-9f54c.appspot.com',
	messagingSenderId: '1061635599041',
	appId: '1:1061635599041:web:c3e51e1a1958276f884240'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
