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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if (!snapShot.exists) {
        console.log('does not exist');
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
