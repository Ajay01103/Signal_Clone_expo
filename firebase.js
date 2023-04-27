import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBTSiFn91BlTGfV6wSXWGm4JKpRYuJpdJc",
  authDomain: "signal-cl-293fb.firebaseapp.com",
  projectId: "signal-cl-293fb",
  storageBucket: "signal-cl-293fb.appspot.com",
  messagingSenderId: "939160446098",
  appId: "1:939160446098:web:9fd04e0c32057751bb724b"
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

