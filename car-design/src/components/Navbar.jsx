import React from 'react';
import Image from "next/image";
import Language from "@/components/Language";

const Navbar = ({logoImage, languageImage}) => {

    return (
        <nav className="bg-white fixed w-full z-10 backdrop-filter backdrop-blur-lg bg-opacity-80 shadow-md">
            <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-1 rtl:space-x-reverse">
                    <Image
                        src={logoImage}
                        className="h-16 w-16 hover:shadow-md hover:cursor-pointer transition-shadow rounded-md"
                        alt="GAZ logo"
                    />
                </a>
                <Language languageImage={languageImage}/>

            </div>
        </nav>
    );
};

export default Navbar;