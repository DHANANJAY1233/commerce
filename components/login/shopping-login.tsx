'use client'

import LoadingDots from "components/loading-dots";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import app from "lib/firebase/init";
import Link from "next/link";
import * as Yup from 'yup';

interface LoginFormValues {
    email: string;
    password: string;
  }

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is Required'),
    password: Yup.string().required('Password is required'),
});

export const ShoppingLogin = () => {

      const handleLogin = async (
        values: LoginFormValues,
        { setSubmitting }: FormikHelpers<LoginFormValues>
      ) => {
        try {
            const auth = getAuth(app)
            const db = getFirestore(app);
            const q = query(collection(db, "users"), where("email", "==", values.email), where("type", "==", "shopper"));
            const querySnapshot = await getDocs(q);
            if (querySnapshot.empty) {
                //  Email doesn't exist or email is not linked to a shopping account
                console.log("Shopping account doesn't exist with the email:", values.email);
                alert("Email and Password don't match!")
                return; // Terminating the function
            }
            await signInWithEmailAndPassword(auth, values.email, values.password);
            alert('Login successful!');
            window.location.href = '/order-now'
            // Redirect or perform additional actions after successful login
        } catch (error: any) { // Consider using a more specific error type if possible
            console.log('Error', error)
            alert("Email and Password don't match!")
        }
        setSubmitting(false);
      };

    return <Formik initialValues={{ email: '', password: ''}} validationSchema={loginSchema} onSubmit={handleLogin}>
        {({ isSubmitting  }) => (
            <Form>
                <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 pb-4 text-black md:flex-row">
                    <div className="min-h-screen w-full flex-1 md:order-none">
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
                                <span>Don't have a shopping account? </span>
                                <Link href="/signup" className="underline">Signup instead</Link>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className={`button lg mt-2 w-full truncate rounded-[8px] bg-[#ffe75f] px-[16px] py-[12px] text-black md:mt-0`}
                        >
                            {isSubmitting ? <LoadingDots className="bg-black" /> : 'Log In'}
                        </button>
                    </div>
                </div>
            </Form>
        )}
    </Formik>
}