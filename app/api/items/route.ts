import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import app from "lib/firebase/init";
import { products } from "mock/products";

export async function POST() {
    const db = getFirestore(app);
    getDocs(collection(db, "shops")).then(querySnapshot => {
      let shops:string[] = []
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        shops.push(doc.id)
      });
      shops.forEach(shop => {
        const ids = products.map(async(product) => {
            const docRef = await addDoc(collection(db, "items"), {...product, store_id: shop});
            return docRef
        })
        console.log(`Document written with ID: ${ids}`)
      })

    })
    return Response.json({
        data: `Document written`
      })
  }