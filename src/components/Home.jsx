import React from 'react';
import { useNavigate } from 'react-router';
import { CheckCircle } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/cuestionario');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F2EFE7] px-4 sm:px-6 md:px-10">
      <div className="w-full max-w-5xl text-center py-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#006A71] mb-8 leading-tight">
          Conoce cómo te sientes
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-[#484848] mb-10 px-2 sm:px-6">
          Responde un breve cuestionario y accede a herramientas personalizadas para tu bienestar:
        </p>

        {/* Lista estilizada y responsive */}
        <div className="flex flex-col gap-6 items-start sm:items-center mb-12 mx-auto w-full max-w-3xl px-4">
          {[
            'Detecta tu nivel de sobrecarga física y emocional.',
            'Recibe recomendaciones prácticas y personalizadas.',
            'Explora recursos pensados especialmente para personas cuidadoras.',
          ].map((text, index) => (
            <div
              key={index}
              className="flex items-start sm:items-center gap-4 w-full"
            >
              <div className="text-[#48A6A7] min-w-[28px] mt-1">
                <CheckCircle size={28} />
              </div>
              <p className="text-base sm:text-lg md:text-xl text-[#484848]">
                {text}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={handleStart}
          className="bg-[#006A71] text-white text-lg sm:text-xl px-8 sm:px-10 py-3 sm:py-4 rounded-2xl hover:bg-[#48A6A7] transition-all shadow-md cursor-pointer"
        >
          Iniciar cuestionario
        </button>
      </div>
    </div>
  );
};

export default Home;
