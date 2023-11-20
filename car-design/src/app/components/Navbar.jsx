import React from 'react';
import Image from "next/image";

const Navbar = ({logoImage, languageImage}) => {
    return (
        <nav className="bg-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-1 rtl:space-x-reverse">
                    <Image
                        src={logoImage}
                        className="h-16 w-16"
                        alt="GAZ logo"
                    />
                </a>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <Image src={languageImage} alt="Language"
                                   className="block h-16 w-16 hover:shadow-md hover:cursor-pointer p-2 transition-shadow rounded-md"/>
                            {/*<a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>*/}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;