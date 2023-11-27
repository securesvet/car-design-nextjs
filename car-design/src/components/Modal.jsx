"use client"
import React from 'react';

const Modal = ({title, content, className}) => {
    return (
        <>
            <button className={`btn bg-neutral-content text-black justify-center items-center ${className}`} onClick={()=>document.getElementById('my_modal_3').showModal()}>{title}</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4 block">{content}</p>
                </div>
            </dialog>
        </>
    );
};

export default Modal;