import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB6Ceb0llM2Qtbqq0sAooAdt6wGJ5bGXy8",
  authDomain: "linkedin-clone-f8dc9.firebaseapp.com",
  projectId: "linkedin-clone-f8dc9",
  storageBucket: "linkedin-clone-f8dc9.appspot.com",
  messagingSenderId: "196719546276",
  appId: "1:196719546276:web:74f018bbb39ab0f98afb31",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
