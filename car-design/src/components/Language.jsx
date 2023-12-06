import React from 'react';
import Image from "next/image";

const Language = ({languageImage}) => {
    return (
        <div className="block w-auto" id="navbar-default">
            <ul className="font-medium flex p-0 mt-4 border rounded-lg flex-row space-x-8 space-x-reverse mt-0 border-0 bg-white">
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