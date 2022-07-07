import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { getFirestore } from 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAX42f9KtTSbVMasN4QQ78gd2mK568fxJs",
    authDomain: "nirsa-cocina.firebaseapp.com",
    projectId: "nirsa-cocina",
    storageBucket: "nirsa-cocina.appspot.com",
    messagingSenderId: "825414074000",
    appId: "1:825414074000:web:67c4561d23cf049d8ae215"
});

export const auth = app.auth();
export const db = getFirestore();
export default app;