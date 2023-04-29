import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase.config';



export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {

    const auth = getAuth(app)

    // set user 
    const [user, setUser] = useState(null)


    // register new user 
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user 
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    // signOut user 
    const logOutUser = () => {
        return signOut(auth)
    }

    // observe user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log(loggedUser)
            setUser(loggedUser)
        })
        return () => unsubscribe()

    }, [])




    const authInfo = {
        registerUser,
        signInUser,
        user,
        logOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;