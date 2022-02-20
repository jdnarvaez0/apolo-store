import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyC2TlOz4zBPJGlgJVodbySQrr6CulHZJv8",
  authDomain: "apolo-store.firebaseapp.com",
  projectId: "apolo-store",
  storageBucket: "apolo-store.appspot.com",
  messagingSenderId: "704198947052",
  appId: "1:704198947052:web:be1c6c0dc938a0821f75c9",
  measurementId: "G-QKWVEPC7RG"
  });

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}
