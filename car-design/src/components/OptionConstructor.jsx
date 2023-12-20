"use client"
import React, {useState} from 'react';
import Image from "next/image";

const OptionConstructor = ({imageSource, selectedOption, color, handle}) => {
    // const [currentSelectedOption, setSelectedOption] = useState(selectedOption);
    // const handleColorChange = () => {
    //     if (selectedOption === color) return
    //     setSelectedOption(color);
    //     console.log(selectedOption);
    // }

    return (
        <div className="card-actions">
            <button className={`w-[4rem] h-[4rem] p-1 aspect-square rounded-full border-2 hover:border-amber-400 flex justify-center items-center 
                               ${selectedOption === color
                                ? "border-blue-500"
                                : "border-gray-200"}`}
                    onClick={handle} value={color}
                >
                <Image className="" src={imageSource} alt="image" value={color}/>
            </button>
        </div>
    );
};

export default OptionConstructor;