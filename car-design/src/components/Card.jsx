import React from 'react';

const Card = ({title, content}) => {
    return (
        <div className="card w-96 max-h-56 bg-neutral text-neutral-content mt-[10rem] items-center justify-center">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{content}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Accept</button>
                    <button className="btn btn-ghost">Deny</button>
                </div>
            </div>
        </div>
    );
};

export default Card;