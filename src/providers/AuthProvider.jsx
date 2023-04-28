import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase.config';



export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const authInfo = {
        // user: { displayName: "Rakib Khan" }
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;