import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const WhatName = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('');

    const handleSubmit = () => {
        navigate('/home', {
            replace: true
        })
    };

    return (
        <div className="min-h-screen bg-[#f2efe7] flex justify-center items-center">
            <div className="bg-white p-8 rounded-xl shadow-xl w-96">
                <h1 className="text-2xl text-[#9acbd0] font-semibold mb-4">¿Cuál es tu nombre?</h1>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Escribe tu nombre"
                    className="w-full p-2 mb-4 border-2 border-[#9acbd0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#48a6a7]"
                />
                <button
                    onClick={handleSubmit}
                    className="w-full p-2 bg-[#48a6a7] text-white rounded-md hover:bg-[#006A71] focus:outline-none"
                >
                    Guardar Nombre
                </button>
            </div>
        </div>
    );
};

export default WhatName;
