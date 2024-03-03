import LoadingDots from "components/loading-dots";
import { getAuth, signOut } from "firebase/auth";
import { AuthContext } from "lib/firebase/auth";
import app from "lib/firebase/init";
import Link from "next/link";
import { useContext, useState } from "react";

export const User = ({userType = 'shopper'}: {userType?: 'shopper' | 'seller' | 'executive'}) => {
    const user = useContext(AuthContext);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
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
        }).catch((error) => {
          // An error happened.
          console.error('Logout error:', error);
        });
      };

    if(user && user.type === userType) {
        return (
            <div className="hidden rounded-[50%] border-2 border-[#ffe75f] bg-[#ffe75f] px-[16px] py-[6px] text-[20px] text-black md:block" onClick={toggleDropdown}>
                {user.name[0]}
                {isDropdownVisible && (
                    <div className="dropdown-menu absolute mt-2 right-0 bg-white shadow-lg rounded-md py-1">
                        <button className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={logout}>Log out</button>
                    </div>
                )}
            </div>
        )
    }

    return (
        <Link href={userType === 'shopper' ? '/login' : '/seller/login'} className="hidden rounded-[8px] border-2 border-black bg-transparent px-[16px] py-[6px] text-[20px] text-black md:block">
            Log In
        </Link>
    )

}