import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase.config';



export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {

    const auth = getAuth(app)

    // set user 
    const [user, setUser] = useState(null)

    // set loader 
    const [loading, setLoading] = useState(true)

    // register new user 
    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user 
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    // signOut user 
    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // observe user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log(loggedUser)
            setUser(loggedUser)
            setLoading(false)
        })
        return () => unsubscribe()

    }, [])




    const authInfo = {
        registerUser,
        signInUser,
        user,
        logOutUser,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;