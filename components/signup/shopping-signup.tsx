'use client'

import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
import LoadingDots from "components/loading-dots";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { collection, doc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import app from "lib/firebase/init";
import Link from "next/link";
import { useState } from "react";
import * as Yup from 'yup';

interface SignupFormValues {
    name: string;
    email: string;
    phone: string;
    address: string;
    loc: { latitude: number; longitude: number };
    password: string;
    confirmPassword: string
}

const signupSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email('Invalid email').required('Email is Required'),
    phone: Yup.string()
        .matches(
            /^(?:\+1)?(?:\([1-9]\d{2}\)\s?|[1-9]\d{2}(?:\-|\s))?[1-9]\d{2}[-\s]?\d{4}$/,
            'Invalid phone number'
        )
        .required('Phone number is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .max(50, 'Password must not exceed 50 characters')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), ""], 'Passwords must match')
        .required('Confirm password is required'),
    address: Yup.string().required("Address is required"),
});

export const ShoppingSignUp = ({ googleMapsApiKey }: { googleMapsApiKey: string }) => {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: googleMapsApiKey || '',
        libraries: ['places']
    });
    const [addressAutoCompleteRef, setAddressAutoCompleteRef] = useState<google.maps.places.Autocomplete>();

    const handleSignup = async (
        values: SignupFormValues,
        { setSubmitting }: FormikHelpers<SignupFormValues>
    ) => {
        try {
            const auth = getAuth(app)
            const db = getFirestore(app);
            const q = query(collection(db, "users"), where("email", "==", values.email), where("type", "==", "shopper"));
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                //  Email already exists, log and terminate the function
                console.log("Record exists with the email:", values.email);
                alert("A shopper account already exists with this email. Please proceed to log in instead.")
                return; // Terminating the function
            }
            const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
            const userId = userCredential.user.uid
            await setDoc(doc(db, "users", userId), {
                name: values.name,
                email: values.email,
                phone: values.phone,
                address: values.address,
                loc: values.loc,
                type: "shopper"
            })
            alert('Signup successful!');
            window.location.href = "/order-now"
            // Redirect or perform additional actions after successful login
        } catch (error: any) { // Consider using a more specific error type if possible
            console.log('Something went wrong', error)
            alert('Something went wrong while signing up!')
        }
        setSubmitting(false);
    };

    return isLoaded ? <Formik initialValues={{ name: '', email: '', phone: '', address: '', password: '', confirmPassword: '', loc: {latitude: 0, longitude: 0} }} validationSchema={signupSchema} onSubmit={handleSignup}>
        {({ isSubmitting, setFieldValue, setFieldError }) => (
            <Form>
                <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 pb-4 text-black md:flex-row">
                    <div className="min-h-screen w-full flex-1 md:order-none">
                        <div className="mb-4 flex flex-col gap-4 lg:flex-row">
                            <div className="flex-1">
                                <label className="mb-1 block text-[14px] leading-[21px] text-black xl:text-[16px] xl:leading-[21px]">
                                    Name
                                </label>
                                <Field
                                    name="name"
                                    type="text"
                                    className={`block w-full appearance-none rounded-[8px] bg-[rgba(0,0,0,0.26)] px-[8px] py-[12px] !placeholder-current !shadow-none !ring-transparent`}
                                />
                                <ErrorMessage name="name" component="div" className="text-red-500" />
                            </div>
                        </div>
                        <div className="mb-4 flex flex-col gap-4 lg:flex-row">
                            <div className="flex-1">
                                <label className="mb-1 block text-[14px] leading-[21px] text-black xl:text-[16px] xl:leading-[21px]">
                                    Email
                                </label>
                                <Field
                                    name="email"
                                    type="email"
                                    className={`block w-full appearance-none rounded-[8px] bg-[rgba(0,0,0,0.26)] px-[8px] py-[12px] !placeholder-current !shadow-none !ring-transparent`}
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500" />
                            </div>
                        </div>
                        <div className="mb-4 flex flex-col gap-4 lg:flex-row">
                            <div className="flex-1">
                                <label className="mb-1 block text-[14px] leading-[21px] text-black xl:text-[16px] xl:leading-[21px]">
                                    Phone Number
                                </label>
                                <Field
                                    placeholder="(XXX) XXX-XXXX"
                                    name="phone"
                                    type="text"
                                    className={`block w-full appearance-none rounded-[8px] bg-[rgba(0,0,0,0.26)] px-[8px] py-[12px] !placeholder-current !shadow-none !ring-transparent`}
                                />
                                <ErrorMessage name="phone" component="div" className="text-red-500" />
                            </div>
                        </div>
                        <div className="mb-4 flex flex-col gap-4 lg:flex-row">
                            <div className="flex-1">
                                <label className="mb-1 block text-[14px] leading-[21px] text-black xl:text-[16px] xl:leading-[21px]">
                                    Address
                                </label>
                                <Autocomplete
                                    onLoad={(autocomplete) => setAddressAutoCompleteRef(autocomplete)}
                                    onPlaceChanged={() => {
                                        const place = addressAutoCompleteRef?.getPlace();
                                        if (!place?.geometry) {
                                            // Handle the case where no place is selected
                                            setFieldError('address', "Cannot find the Geolocation");
                                            return;
                                        }
                                        setFieldValue('address', place?.formatted_address ?? '')
                                        const latLng = {
                                            latitude: place?.geometry?.location?.lat() ?? 0,
                                            longitude: place?.geometry?.location?.lng() ?? 0
                                        };
                                        setFieldValue('loc', latLng);
                                    }}
                                >
                                    <Field
                                        name="address"
                                        type="text"
                                        className={`block w-full appearance-none rounded-[8px] bg-[rgba(0,0,0,0.26)] px-[8px] py-[12px] !placeholder-current !shadow-none !ring-transparent`}
                                    />
                                </Autocomplete>
                                <ErrorMessage name="address" component="div" className="text-red-500" />
                            </div>
                        </div>
                        <div className="mb-4 flex flex-col gap-4 lg:flex-row">
                            <div className="flex-1">
                                <label className="mb-1 block text-[14px] leading-[21px] text-black xl:text-[16px] xl:leading-[21px]">
                                    Password
                                </label>
                                <Field
                                    name="password"
                                    type="password"
                                    className={`block w-full appearance-none rounded-[8px] bg-[rgba(0,0,0,0.26)] px-[8px] py-[12px] !placeholder-current !shadow-none !ring-transparent`}
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500" />
                            </div>
                        </div>
                        <div className="mb-4 flex flex-col gap-4 lg:flex-row">
                            <div className="flex-1">
                                <label className="mb-1 block text-[14px] leading-[21px] text-black xl:text-[16px] xl:leading-[21px]">
                                    Confirm Password
                                </label>
                                <Field
                                    name="confirmPassword"
                                    type="password"
                                    className={`block w-full appearance-none rounded-[8px] bg-[rgba(0,0,0,0.26)] px-[8px] py-[12px] !placeholder-current !shadow-none !ring-transparent`}
                                />
                                <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
                            </div>
                        </div>
                        <div className="mb-4 flex flex-col gap-4 lg:flex-row">
                            <div className="flex-1">
                                <span>Already have a shopping account? </span>
                                <Link href="/login" className="underline">Login instead</Link>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className={`button lg mt-2 w-full truncate rounded-[8px] bg-[#ffe75f] px-[16px] py-[12px] text-black md:mt-0`}
                        >
                            {isSubmitting ? <LoadingDots className="bg-black" /> : 'Sign Up'}
                        </button>
                    </div>
                </div>
            </Form>
        )}
    </Formik>: <div>Loading ...</div>
}