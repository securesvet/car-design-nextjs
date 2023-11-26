import React from 'react';
import OptionConstructor from "@/components/OptionConstructor";

const Card = ({title, content, optionObject}) => {
    return (
        <div className="card max-w-[30rem] min-w-[22rem] min-h-56 m-[0_auto] bg-white shadow-2xl text-black mt-[10rem]">
            <div className="card-body items-center justify-center text-center">
                <h2 className="card-title">{title}</h2>
                <div className="flex gap-5 flex-wrap justify-center">
                    {optionObject.map((element) => (
                        <OptionConstructor imageSource={element.src}/>
                    ))}
                </div>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Card;