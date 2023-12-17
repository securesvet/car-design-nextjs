"use client"
import React, {useState} from 'react';
import axios from "axios";

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
const Modal = ({title, className, color, wheel}) => {

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        console.log(event.target.value);
    }

    const submit = async(e) => {
        e.preventDefault();

        try {
            console.log('yeah buddy');
            await axios.post('http://localhost:3000/', {
                color, wheel, email, address,
            })
        }
        catch(e) {
            console.log(e);
        }

    }

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
                    <form method="dialog">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <div className="inline-block">
                        <label>
                            <span>Your color: {color.toUpperCase()}</span>
                            <br/>
                            <span>Your wheels: {wheel.toUpperCase()}</span>
                            <br/>

                            <span>Email: </span>
                            <input className="input input-bordered w-full max-w-xs block"
                                required
                                type="email"
                                onChange={(e) => {handleEmailChange(e)}}
                                value={email}
                            />
                            <span className="text-red-700 inline-block">{(!validateEmail(email) && email.length !== 0) ? ('Email is incorrect') : ('')}</span>
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

                    </form>
                    <label className="block mt-2 flex justify-center items-center">
                        <button className="btn" onClick={submit}>Pay</button>
                    </label>

                </div>
            </dialog>
        </>
    );
};

export default Modal;