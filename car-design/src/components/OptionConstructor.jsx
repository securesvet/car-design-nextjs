import React from 'react';
import Image from "next/image";

const OptionConstructor = ({imageSource}) => {
    return (
        <div className="card-actions">
            <button className="w-20 h-20 aspect-square rounded-full border-2 hover:border-amber-400">
                <Image className="object-fill" src={imageSource} alt="image"/>
            </button>
        </div>
    );
};

export default OptionConstructor;