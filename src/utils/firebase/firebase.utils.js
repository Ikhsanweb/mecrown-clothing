// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// imported libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDKCjb8MpdNlTKcNfcSM8fdZ07fKU0tGu0',
  authDomain: 'mecrown-clothing-db.firebaseapp.com',
  projectId: 'mecrown-clothing-db',
  storageBucket: 'mecrown-clothing-db.appspot.com',
  messagingSenderId: '51005913850',
  appId: '1:51005913850:web:3790463af36911b3d16743',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// inititalized provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userauth) => {
  const userDocRef = doc(db, 'users', userauth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userauth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};
