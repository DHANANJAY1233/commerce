'use client';

import Grid from "components/grid";
import ProductGridItems from "components/layout/product-grid-items";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { Product } from "lib/data-types/products";
import app from "lib/firebase/init";
import { useEffect, useState } from "react";

const ProductList = ({store_id, collections}: {store_id?: string, collections?: string}) => {
    const [products, setProducts] = useState<Product[]>([])
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
    })
  },[])
     return <div>
         {products.length > 0 ? (
                <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  <ProductGridItems products={products} />
                </Grid>
              ) : null} 
     </div>
}

export default ProductList