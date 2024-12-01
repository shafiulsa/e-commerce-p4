import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,updateProfile } from "firebase/auth";
import { app } from "../fairbase/fairbase.config";
export const AuthContext= createContext(null); 

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser]= useState(null);
    const [loading,setLoading] =useState(true);


    const createUser = (email,password) =>{

        console.log(email,password);
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    
    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const  logOut = ()=>{
        setLoading(true);
        return signOut(auth)
    }
    
    const updateUserProfile = (name,photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL:photo
        });
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current user is ',currentUser);
            setLoading(false);
        });
        return ()=>{
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;