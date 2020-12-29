import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyARDGIme-VlTOpgIScBandrFi_vduD9yb8",
    authDomain: "crwn-db-dfc17.firebaseapp.com",
    projectId: "crwn-db-dfc17",
    storageBucket: "crwn-db-dfc17.appspot.com",
    messagingSenderId: "780185544677",
    appId: "1:780185544677:web:9a8a8aae8da2c46f61710c",
    measurementId: "G-FH39K64S37"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
