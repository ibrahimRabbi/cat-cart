import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase.config';
import {getAuth,createUserWithEmailAndPassword,onAuthStateChanged,updateProfile,signOut, signInWithEmailAndPassword} from 'firebase/auth'
export const Context = createContext()


const AuthContext = ({children}) => {

    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    
    const signup = (email,password) => {
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const profile = (user,name,photo) => {
        return updateProfile(user,{displayName:name,photoURL:photo})
    }

    const signin = (email,password) => {
       return signInWithEmailAndPassword(auth,email,password)
    }

    const signout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            //setLoading(false)
        })

        return () => {
            subscribe()
        }
    }, [auth])




const authentications = {signup,profile,user,signout,signin}
 

    return (
        <Context.Provider value={authentications}>
            {children}
        </Context.Provider>
    )





     
};

export default AuthContext;