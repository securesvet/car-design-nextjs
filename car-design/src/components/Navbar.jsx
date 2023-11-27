import React from 'react';
import Image from "next/image";

const Navbar = ({logoImage, languageImage}) => {
    return (
        <nav className="bg-white fixed w-full z-10 backdrop-filter backdrop-blur-lg bg-opacity-80 shadow-md">
            <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-1 rtl:space-x-reverse">
                    <Image
                        src={logoImage}
                        className="h-16 w-16 hover:shadow-md hover:cursor-pointer transition-shadow rounded-md"
                        alt="GAZ logo"
                    />
                </a>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <details className="dropdown">
                                <summary className="m-1">
                                    <Image src={languageImage} alt="Language"
                                           className="block h-16 w-16 hover:shadow-md hover:cursor-pointer p-2 transition-shadow rounded-md"/>
                                </summary>
                                <ul className="relative right-1 p-2 shadow text-black menu dropdown-content z-[1] bg-white rounded-box w-40">
                                    <li><a>English</a></li>
                                    <li><a>Russian</a></li>
                                </ul>
                            </details>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;