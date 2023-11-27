import React from 'react';
import Image from "next/image";

const OptionConstructor = ({imageSource, selectedOption, color}) => {
    const handleColorChange = () => {
        selectedOption = color;
        console.log(selectedOption);
    }

    return (
        <div className="card-actions">
            <button className={`w-[4rem] h-[4rem] aspect-square rounded-full border-2 hover:border-amber-400 flex justify-center items-center 
                               ${selectedOption === color
                                ? "border-blue-500"
                                : "border-gray-200"}`}
                    onClick={handleColorChange()}
                >
                <Image className="object-fill" src={imageSource} alt="image"/>
            </button>
        </div>
    );
};

export default OptionConstructor;