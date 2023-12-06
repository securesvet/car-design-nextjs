import React, {useState} from 'react';
import OptionConstructor from "@/components/OptionConstructor";

const Card = ({title, content, optionObject, selectedOption, handle}) => {
    return (
        <div className="card max-w-[30rem] min-w-[22rem] min-h-56 bg-white shadow-2xl text-black mt-[10rem]">
            <div className="card-body items-center justify-center text-center">
                <h2 className="card-title">{title}</h2>
                <div className="flex gap-5 flex-wrap justify-center">
                    {Object.keys(optionObject).map((element) => (
                        <OptionConstructor imageSource={optionObject[element].src} selectedOption={selectedOption} color={optionObject[element].option} handle={handle}/>
                    ))}
                </div>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Card;