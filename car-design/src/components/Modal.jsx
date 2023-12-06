"use client"
import React, {useState} from 'react';

const Modal = ({title, className, color, wheel}) => {

    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');


    return (
        <>
            <button className={`btn bg-neutral-content text-black justify-center items-center ${className}`} onClick={()=>document.getElementById('my_modal_3').showModal()}>{title}</button>
            <dialog id="my_modal_3" className="modal text-lg p-2">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                    </form>
                    <h3 className="font-bold text-lg">{title}</h3>
                    <div className="inline-block">
                        <label>
                            <span>Your color: {color.toUpperCase()}</span>
                            <br/>
                            <span>Your wheels: {wheel.toUpperCase()}</span>
                            <br/>
                            <span>Email: </span>
                            <input className="input input-bordered w-full max-w-xs"
                                required
                                type="email"
                                onChange={(e) => {setEmail(e.target.value); console.log(e.target.value)}}
                                value={email}
                            />
                            <br/>
                        </label>
                        <label>
                            <span>Address: </span>
                            <input className="input input-bordered w-full max-w-xs"
                                   required
                                   type="text"
                                   onChange={(e) => {setAddress(e.target.value); console.log(e.target.value)}}
                                   value={address}
                            />
                        </label>
                    </div>
                    <label className="block mt-2 flex justify-center items-center">
                        <button className="btn" onClick={() => {console.log('Ordered')}}>Pay</button>
                    </label>
                </div>
            </dialog>
        </>
    );
};

export default Modal;