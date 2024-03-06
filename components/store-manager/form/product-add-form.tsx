'use client';

import LoadingDots from "components/loading-dots";
import { Gallery } from "components/product/gallery";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from 'firebase/storage';
import { collections } from "lib/constants";
import { Store } from "lib/data-types";
import app from "lib/firebase/init";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Input from "./input";


const ProductAddForm = ({ storeId }: {storeId:string}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        price: 0,
        collection: collections[0]?.collectionCode || '',
        count: 0,
        description_html: '',
    });
    const [productImage, setProductImage] = useState(null)

    const handleInputChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        setIsLoading(true)
        const id = uuidv4()
        const imageUrl = await uploadImage(id)
        try {
            const db = getFirestore(app);
            const docRef = doc(db, "shops", storeId);
            const querySnapshot = await getDoc(docRef)
            if (querySnapshot.exists()) {
                const store = { ...querySnapshot.data(), id: querySnapshot.id } as Store
                await setDoc(doc(db, "items", id), {...formData, store_id: store.id, store_name: store.name, image_src: imageUrl});
                console.log('Document written with ID: ', id);
                window.alert("Product added successfully!!")
                location.reload()
            }else {
                window.alert("Couldn't find store!")
                console.error("Couldn't find store!");
            }
            
            
        } catch (error) {
            window.alert("Something went wrong while adding product")
            console.error('Error adding document: ', error);
        } finally {
            setIsLoading(false)
        }
    };

    const showPreview = (e:any) => {
        if(e.target.files.length > 0){
            setProductImage(e.target.files[0])
          }
    }

    const uploadImage = async (id:string) => {
        const storage = getStorage(app);
        const imageRef = storageRef(storage, `products/${id}`);
        try {
            const snapshot = await uploadBytes(imageRef, productImage as any)
            const imageUrl = await getDownloadURL(snapshot.ref)
            return imageUrl
        }catch(e){
            window.alert('Something went wrong while uploading Image')
            console.log('Image uploading error:', e)
        }
        
    }



    return <form noValidate onSubmit={handleSubmit}>
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 pb-4 text-black md:flex-row">
            <div className="min-h-screen w-full flex-1 md:order-none">
                <div className="mb-4 flex flex-col gap-4 lg:flex-row">
                    <Input label="Product Title" name="name" type="text" value={formData.name} onChange={handleInputChange} />
                </div>
                <div className="mb-4 flex flex-col gap-4 lg:flex-row">
                <div className="flex-1">
                    <label className="mb-1 block text-[14px] leading-[21px] text-black xl:text-[16px] xl:leading-[21px]">
                        Product Category
                    </label>
                    <select name="collection" value={formData.collection} onChange={handleInputChange} className="appearance-none rounded-md bg-[rgb(255,209,97)] bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAYAAAAMJL+VAAAABGdBTUEAALGPC/xhBQAAAQtJREFUOBG1lEEOgjAQRalbGj2OG9caOACn4ALGtfEuHACiazceR1PWOH/CNA3aMiTaBDpt/7zPdBKy7M/DCL9pGkvxxVp7KsvyJftL5rZt1865M+Ucq6pyyF3hNcI7Cuu+728QYn/JQA5yKaempxuZmQngOwEaYx55nu+1lQh8GIatMGi+01NwBcEmhxBqK4nAPZJ78K0KKFAJmR3oPp8+Iwgob0Oa6+TLoeCvRx+mTUYf/FVBGTPRwDkfLxnaSrRwcH0FWhNOmrkWYbE2XEicqgSa1J0LQ+aPCuQgZiLnwewbGuz5MGoAhcIkCQcjaTBjMgtXGURMVHC1wcQEy0J+Zlj8bKAnY1/UzDe2dbAVqfXn6wAAAABJRU5ErkJggg==')] bg-[length:0.7rem] bg-[right_0.7rem_center] bg-no-repeat pl-[10px] pr-[40px]">
                        {collections.map(collection => {
                            return <option value={collection.collectionCode}>{collection.title}</option>
                        })}
                    </select>
                </div>    
                </div>
                <div className="mb-4 flex flex-col gap-4 lg:flex-row">
                    <Input label="Price" name="price" type="number" value={formData.price} onChange={handleInputChange} />
                </div>
                <div className="mb-4 flex flex-col gap-4 lg:flex-row">
                    <Input label="Count" name="count" type="number" value={formData.count} onChange={handleInputChange} />
                </div>
                <div className="mb-4">
                    <label className="mb-1 block text-[14px] leading-[21px] text-black xl:text-[16px] xl:leading-[21px]">
                        Product Description
                    </label>
                    <textarea
                        name="description_html"
                        value={formData.description_html}
                        onChange={handleInputChange}
                        rows={5}
                        className="block w-full appearance-none rounded-[8px] bg-[rgba(0,0,0,0.26)] px-[8px] py-[12px] !placeholder-current !shadow-none !ring-transparent"
                    />
                </div>
                <div className="mb-4 flex flex-col gap-4 lg:flex-row">
                    <div className="flex-1">
                        <label className="mb-1 block text-[14px] leading-[21px] text-black xl:text-[16px] xl:leading-[21px]">
                            Product Image
                        </label>
                        <input
                        type="file"
                        accept="image/*"
                        onChange={showPreview}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="button lg mt-2 w-full truncate rounded-[8px] bg-[#ffe75f] px-[16px] py-[12px] text-black md:mt-0"
                >
                   { isLoading ? <LoadingDots className="bg-black" />: 'Add Product'}
                </button>
            </div>
            <div className="flex-1 md:order-last md:w-[125px]">
                <div className="w-full basis-full lg:basis-4/6">
                    <h2>Product Image Preview</h2>
                    {productImage ? <Gallery imageSrc={URL.createObjectURL(productImage) || ''} /> : <p className="text-[14px]">No Image Uploaded</p>}
                </div>
            </div>
        </div>
    </form>
}

export default ProductAddForm