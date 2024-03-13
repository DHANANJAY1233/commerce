import LoadingDots from "components/loading-dots";
import { getAuth, signOut } from "firebase/auth";
import { AuthContext } from "lib/firebase/auth";
import app from "lib/firebase/init";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";

export const User = ({userType = 'shopper'}: {userType?: 'shopper' | 'seller' | 'executive'}) => {
    const user = useContext(AuthContext);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null); // Reference to the wrapper element
    if(user === undefined) {
        return <LoadingDots className="bg-black" />
    }
    // Toggle dropdown visibility
    const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

    const logout = () => {
        const auth = getAuth(app)
        signOut(auth).then(() => {
          // Sign-out successful.
          console.log('Logout successful');
          window.location.href = userType === 'shopper' ? '/order-now' : userType === 'seller' ? '/seller': '/executive'
        }).catch((error) => {
          // An error happened.
          console.error('Logout error:', error);
        });
      };
    
      useEffect(() => {
        // Function to check if clicked outside of element
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsDropdownVisible(false); // Close the dropdown
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);


    if(user && user.type === userType) {
        return (
            <div ref={wrapperRef} className="hidden rounded-[50%] border-2 border-[#ffe75f] bg-[#ffe75f] px-[16px] py-[6px] text-[20px] text-black md:block" onClick={toggleDropdown}>
                {user.name[0]}
                {isDropdownVisible && (
                    <div className="dropdown-menu absolute mt-2 top-[45px] right-0 bg-white shadow-lg rounded-md py-1 w-max">
                        <p className="block px-4 py-2 text-sm text-black">Welcome, {user.name}!</p>
                        <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="/orders">Orders</Link>
                        <button className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={logout}>Log out</button>
                    </div>
                )}
            </div>
        )
    }

    return (
        <Link href={userType === 'shopper' ? '/login' : userType === 'seller' ? '/seller/login': '/executive/login'} className="hidden rounded-[8px] border-2 border-black bg-transparent px-[16px] py-[6px] text-[20px] text-black md:block">
            Log In
        </Link>
    )

}