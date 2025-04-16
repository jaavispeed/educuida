import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const LandingPage = () => {
    const [name, setName] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const storedName = localStorage.getItem('userName');
        if (storedName) {
            setName(storedName);
        }
    }, []);

    const handleContinue = () => {
        localStorage.setItem('userName', name);
        navigate('/home', {
            replace: true
        })
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F2EFE7] px-6">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Texto */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#006A71] mb-6">
                        ¡Bienvenido a tu espacio de autocuidado!
                    </h1>
                    <p className="text-lg text-[#484848]">
                        Cuidar a otros requiere mucho amor, pero también puede ser agotador. Esta plataforma está diseñada para ayudarte a conocer tu nivel de sobrecarga física y emocional con un breve cuestionario. Recibirás recomendaciones simples para mejorar tu bienestar.
                    </p>
                </div>

                {/* Input y botón */}
                <div className="flex flex-col items-start gap-4">
                    <label className="text-[#006A71] text-lg font-medium">¿Cómo te llamas?</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Escribe tu nombre"
                        className="w-full px-4 py-2 border border-[#9ACBD0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006A71] text-[#006A71]"
                    />
                    <button
                        onClick={handleContinue}
                        className="bg-[#006A71] text-white px-6 py-2 rounded-xl hover:bg-[#48A6A7] transition-all cursor-pointer"
                    >
                        Continuar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
