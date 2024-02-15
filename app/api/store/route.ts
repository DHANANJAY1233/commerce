import { addDoc, collection, getFirestore } from "firebase/firestore";
import app from "lib/firebase/init";
import { shops } from "mock/shops";

export async function POST() {
    const db = getFirestore(app);
    const ids = shops.map(async(shop) => {
      const docRef = await addDoc(collection(db, "shops"), shop);
      return docRef
    })
      return Response.json({
        data: `Document written with ID: ${ids}`
      })
    
  }