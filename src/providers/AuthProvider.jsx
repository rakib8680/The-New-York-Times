import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase.config';



export const AuthContext = createContext(null);

const auth = getAuth(app)

const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

const AuthProvider = ({ children }) => {

    const authInfo = {
        registerUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;