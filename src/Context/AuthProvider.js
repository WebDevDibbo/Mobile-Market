import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading]  =  useState(true);

    const googleLogin = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const createUser = (email,password)=>{
        setLoading(true);
   return createUserWithEmailAndPassword(auth,email,password);
    }
    const logIn = (email,password) =>{
        // setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
            console.log('user observing')
            setUser(currentUser);
            setLoading(false)
        });
        return () => unsubscribe();
    },[])
   const authInfo = {user,loading,createUser,logIn,logOut,googleLogin};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;