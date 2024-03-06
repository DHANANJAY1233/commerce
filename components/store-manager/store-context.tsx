"use client"

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { Store } from "lib/data-types";
import app from "lib/firebase/init";
import { ReactNode, createContext, useEffect, useState } from "react";

const auth = getAuth(app)
  
export const StoreContext = createContext<Store|null|undefined>(null);

export const StoreProvider = ({children}:{children:ReactNode}) => {
    const [currentStore, setCurrentStore] = useState<Store|null>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if(user) {
        const db = getFirestore(app);
        const q = query(collection(db, "shops"), where("manager_id", "==", user.uid));
        getDocs(q).then(querySnapshot => {
            let shops:Store[] = []
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                shops.push({...doc.data(),id:doc.id} as Store)
            });
            setCurrentStore(shops[0] || null)
        }).catch(err => {
            console.log("error: ",err )
            setCurrentStore(null)
        })
      }else {
        setCurrentStore(null)
      }
    })

    return () => unsubscribe(); // Make sure to unsubscribe on component unmount

  }, []);

  return (
    <StoreContext.Provider value={currentStore}>
      {children}
    </StoreContext.Provider>
  );
}

