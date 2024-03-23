import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLt79bNyRcFnrc1GfX02fiia00NqPDKDA",
  authDomain: "brandroot-clothinx.firebaseapp.com",
  projectId: "brandroot-clothinx",
  storageBucket: "brandroot-clothinx.appspot.com",
  messagingSenderId: "658698809705",
  appId: "1:658698809705:web:218bcb80fe17c594d60df8",
};
// eslint-disable-next-line no-unused-vars
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const auth = getAuth();
//Google Popup Configs ------>
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//Fire base Configs ----->
export const db = getFirestore();

export const addCollectionsandDocs = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("Transaction Done!!!");
};

export const CreateUserDoc = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;
  const userDoc = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDoc);
  //If user not exists:
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const created = new Date();
    try {
      await setDoc(userDoc, { displayName, email, created, ...additionalInfo });
    } catch (err) {
      console.log(err.message);
    }
  }
  //if user exists:
  return userDoc;
};

//Creating a user with email & password ------->
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

//Signing in a user with email & password ------->
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateListener = (callback) =>
  onAuthStateChanged(auth, callback);
