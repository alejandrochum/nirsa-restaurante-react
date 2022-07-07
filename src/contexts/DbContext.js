import React, { useContext, useEffect, useState } from 'react';
import { db } from '../firebase';
import { useAuth } from './AuthContext';
import { updateDoc, getDoc, doc } from 'firebase/firestore';

const DbContext = React.createContext();

export function useDb() {
    return useContext(DbContext)
}

export function DbProvider({ children }) {
    const [userInfo, setUserInfo] = useState();
    const { currentUser } = useAuth();

    function handlelogout() {
        setUserInfo(null);
    }

    function hasloggedintotrue() {
        setUserInfo({
            hasLoggedIn: true
        })
    }

    function firstpasschange() {
        const docRef = doc(db, 'users', currentUser.uid);

        updateDoc(docRef, {
            hasLoggedIn: true
        });
    }

    const value = {
        firstpasschange,
        userInfo,
        handlelogout,
        hasloggedintotrue
    }

    useEffect(() => {
        if (currentUser) {
            const docRef = doc(db, 'users', currentUser.uid);
            getDoc(docRef).then(data => {
                setUserInfo(data.data());
            });
        }
    }, [currentUser]);

    return <DbContext.Provider value={value}>
        {children}
    </DbContext.Provider>
}