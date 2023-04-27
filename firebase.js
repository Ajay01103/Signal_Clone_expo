import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "YOUR API KEY",
  authDomain: "AUTH DOMAIN",
  projectId: "PROJECTID",
  storageBucket: "STORAGE BUCKET",
  messagingSenderId: "MESSAGING ID",
  appId: "APP ID"
};

  let app;

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth };

