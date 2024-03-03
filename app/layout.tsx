import { AuthProvider } from "lib/firebase/auth";
import { Bree_Serif, Open_Sans, Work_Sans } from "next/font/google";
import { ReactNode } from "react";

const inter = Open_Sans({
    weight: ['300', '400', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter'
});

const bree = Bree_Serif({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-bree'
});

const work = Work_Sans({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-work'
});

export default async function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={`${inter.variable} ${bree.variable} ${work.variable}`}>
            <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
                <AuthProvider>
                    {children}
                </AuthProvider>
            </body>
        </html>
    )
}