'use client';

import Grid from "components/grid";
import ProductGridItems from "components/layout/product-grid-items";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { Product } from "lib/data-types/products";
import app from "lib/firebase/init";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

const ProductList = ({store_id, collections, isStoreManager = false}: {store_id?: string, collections?: string, isStoreManager?: boolean}) => {
  if (!store_id) return notFound();
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
    const db = getFirestore(app);
    let q;
    if(store_id && collections) {
        q = query(collection(db, "items"), where("store_id", "==", store_id), where("collection", "==", collections))
    } else if(store_id && !collections) {
        q = query(collection(db, "items"), where("store_id", "==", store_id))
    } else if(!store_id && collections) {
        q = query(collection(db, "items"), where("collection", "==", collections))
    } else {
        q = query(collection(db, "items"))
    }
    getDocs(q).then(querySnapshot => {
      let items:Product[] = []
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        items.push({...doc.data(),id:doc.id} as Product)
      });
      setProducts(items)
    }).finally(() => setIsLoading(false))
  },[])
     return <div>
      {isLoading ? <div>Loading...</div>: (products.length > 0 ? (
                <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  <ProductGridItems products={products} isStoreManager={isStoreManager} />
                </Grid>
              ) : <div>Sorry, No Items found</div>)}
     </div>
}

export default ProductList