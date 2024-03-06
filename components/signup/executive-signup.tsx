'use client'

import LoadingDots from "components/loading-dots";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { collection, doc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import app from "lib/firebase/init";
import Link from "next/link";
import * as Yup from 'yup';

interface SignupFormValues {
    name: string;
    email: string;
    phone: string;
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
});

export const ExecutiveSignUp = () => {

      const handleSignup = async (
        values: SignupFormValues,
        { setSubmitting }: FormikHelpers<SignupFormValues>
      ) => {
        try {
            const auth = getAuth(app)
            const db = getFirestore(app);
            const q = query(collection(db, "users"), where("email", "==", values.email), where("type", "==", "executive"));
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                //  Email already exists, log and terminate the function
                console.log("Record exists with the email:", values.email);
                alert("A delivery account already exists with this email. Please proceed to log in instead.")
                return; // Terminating the function
            }
            const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
            const userId = userCredential.user.uid
            await setDoc(doc(db, "users", userId), {
                name: values.name,
                email: values.email,
                phone: values.phone,
                type: "executive"
            })
            alert('Signup successful!');
            window.location.href = "/delivery"
            // Redirect or perform additional actions after successful login
        } catch (error: any) { // Consider using a more specific error type if possible
            console.log('Something went wrong', error)
            alert('Something went wrong while signing up!')
        }
        setSubmitting(false);
      };

    return <Formik initialValues={{ name: '', email: '', phone: '', password: '', confirmPassword: '' }} validationSchema={signupSchema} onSubmit={handleSignup}>
        {({ isSubmitting  }) => (
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
                                <span>Already have a delivery account? </span>
                                <Link href="/executive/login" className="underline">Login instead</Link>
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
    </Formik>
}