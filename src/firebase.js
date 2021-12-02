import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import {useEffect, useState} from "react";

const firebaseConfig = {
    apiKey: "AIzaSyDfardr1oM0pKMFnqZUB5jlpv1hB0cpgnM",
    authDomain: "logintest-715f6.firebaseapp.com",
    projectId: "logintest-715f6",
    storageBucket: "logintest-715f6.appspot.com",
    messagingSenderId: "199946112616",
    appId: "1:199946112616:web:bfd8878640aefebfc535dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

export const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const logout = () => {
    return signOut(auth)
}

export const useAuth = () => {
    const [currentUser, setCurrentUser] = useState()
    useEffect(() => {
            onAuthStateChanged(auth,user => setCurrentUser(user))
    }, [])

    return currentUser
}