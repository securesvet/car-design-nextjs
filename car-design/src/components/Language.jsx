import React from 'react';
import Image from "next/image";

const Language = ({languageImage}) => {
    return (
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                <li>
                    <details className="dropdown">
                        <summary className="h-16 w-16 flex justify-center items-center">
                            <Image src={languageImage} alt="Language"
                                   className="block h-16 w-16 hover:shadow-md hover:cursor-pointer p-2 transition-shadow rounded-md"/>
                        </summary>
                        <ul className="relative right-0 p-2 shadow text-black menu dropdown-content z-[1] bg-white rounded-box w-40">
                            <li><a>English</a></li>
                            <li><a>Russian</a></li>
                        </ul>
                    </details>

                </li>
            </ul>
        </div>
    );
};

export default Language;