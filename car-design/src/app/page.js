"use client";
import React from "react";
import { useRouter } from 'next/navigation';

export default function App() {
    const router = useRouter();
    const handleButtonClick = () => {
        router.push('/constructor');
    }

    return (
        <>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://img03litfund.ru/images/lots/252/221-30-M3273814_un607.jpg)'}}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
                        <p className="mb-5">Want to Build your own car?</p>
                        <button onClick={handleButtonClick} className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}