import { useSidebar } from "../context/SidebarContext";
import { useHeader } from "../context/HeaderContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState, type FormEvent } from "react";

const AppHeader = () => {
    const {isOpen, toggleUserMenu} = useHeader()
    const { toggleSidebar } = useSidebar();
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false)

    const handleLogout = async (e: FormEvent) => {
        try {
            e.preventDefault()
            setIsLoading(true)
            await logout()
            navigate('/')
        } catch(error) {
            console.error(
                "Unexpected server error occured during logging user out: ", 
                error
            );
        } finally {
            setIsLoading(false);
        }
    }

    const handleUserNameFormat = () => {
        if (!user) return ''

        let fullName = `${user.user.last_name}, ${user.user.first_name}`;

        if(user.user.middle_name) {
            fullName += ` ${user.user.middle_name.charAt(0)}, `;
        }

        if(user.user.suffix_name) {
            fullName += `${user.user.suffix_name}`;
        }

        return fullName;
    }
    useEffect(() => {
        if(user) {
            handleUserNameFormat()
        }
    }, [user]);

    return (
        <>
        {isOpen && (
            <div className="fixed inset-0 z-40" onClick={toggleUserMenu} />
        )}
            <nav className="fixed top-0 z-50 w-full bg-neutral-primary-soft border-b border-default bg-gray-900  border-gray-800">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button 
                                type="button"
                                onClick={toggleSidebar}
                                className="inline-flex items-center p-2 text-sm text-body rounded-base sm:hidden hover:bg-neutral-secondary-medium focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
                            >
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a href="/" className="flex ms-2 md:me-24 items-center">
                                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
                                <span className="self-center text-xl font-bold sm:text-2xl text-white whitespace-nowrap text-heading">Flowbite</span>
                            </a>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ms-3">
                                <div>
                                    <button type="button"
                                            onClick={toggleUserMenu}
                                            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" 
                                            aria-expanded="false" 
                                            data-dropdown-toggle="dropdown-user">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                                    </button>
                                </div>
                                <div
                                    className={`absolute right-8 to  top-13 min-w-50 z-50 bg-gray-800 border border-gray-700 ${
                                      isOpen ? "block" : "hidden"
                                    } bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44`}
                                    id="dropdown-user">
                                    <div className="px-4 py-3 border-b border-default-medium" role="none">
                                        <p className="text-sm font-medium text-heading text-white" role="none">
                                            {handleUserNameFormat()}
                                        </p>
                                    </div>
                                    <ul className="p-2 text-sm text-body text-white font-medium" role="none">
                                        <li>
                                          <button type="submit" onClick={handleLogout} disabled={isLoading} className="inline-flex cursor-pointer disabled:cursor-not-allowed items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">{isLoading ? 'Signing Out...' : 'Sign Out'}</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default AppHeader;