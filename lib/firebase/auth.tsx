"use client"

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { User } from "lib/data-types/users";
import { ReactNode, createContext, useEffect, useState } from "react";
import app from "./init";

const auth = getAuth(app)
  
export const AuthContext = createContext<User|null|undefined>(null);

export const AuthProvider = ({children}:{children:ReactNode}) => {
    const [currentUser, setCurrentUser] = useState<User|null>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if(user) {
        const db = getFirestore(app);
        const docRef = doc(db, "users", user.uid);
        getDoc(docRef).then((querySnapshot) => {
            if (querySnapshot.exists()) {
                setCurrentUser({...querySnapshot.data()} as User)
            }else {
              setCurrentUser(null)
            }
        }).catch(err => {
          console.log("error: ", err)
          setCurrentUser(null)
        })
      }else {
        setCurrentUser(null)
      }
    })

    return () => unsubscribe(); // Make sure to unsubscribe on component unmount

  }, []);

  return (
    <AuthContext.Provider value={currentUser}>
      {children}
    </AuthContext.Provider>
  );
}

