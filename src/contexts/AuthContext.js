import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}
export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signin(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function signout() {
        return auth.signOut();
    }

    function updatepassword(password) {
        return auth.currentUser.updatePassword(password);
    }

    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged(async user => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsuscribe;
    }, []);
    // useEffect(() => {
    //     const fetchData = async (user) => {
    //         const docRef = doc(db, 'users', user.uid);
    //         const data = await getDoc(docRef);
    //         setUserInfo(data.data());
    //         setLoading(false);
    //         navigate('/');
    //     }

    //     const unsuscribe = auth.onAuthStateChanged(user => {
    //         if (user) {
    //             fetchData(user);
    //             setCurrentUser(user);
    //             return;
    //         }
    //         setCurrentUser(user);
    //         setLoading(false);
    //     });
    //     return unsuscribe
    // })

    const value = {
        currentUser,
        updatepassword,
        signout,
        signin
    }

    return (
        <AuthContext.Provider value={value} >
            {!loading && children}
        </AuthContext.Provider>
    )
}
