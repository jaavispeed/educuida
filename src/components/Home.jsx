import { HeartPulse, Clock3, SmilePlus, ClipboardList } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F2EFE7] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-10 text-center">
        <h1 className="text-5xl font-bold text-[#006A71] flex items-center justify-center gap-4 flex-wrap">
          <HeartPulse className="text-[#9ACBD0] min-w-[24px] min-h-[24px]" size={40} />
          Evalúa tu Sobrecarga
        </h1>

        <ul className="space-y-6 text-xl text-gray-800 text-left">
          <li className="flex items-start gap-4">
            <Clock3 className="text-[#9ACBD0] mt-1 min-w-[24px] min-h-[24px]" size={28} />
            <span>
              ¿Últimamente te has sentido física o emocionalmente agotada?
            </span>
          </li>
          <li className="flex items-start gap-4">
            <ClipboardList className="text-[#9ACBD0] mt-1 min-w-[24px] min-h-[24px]" size={28} />
            <span>
              ¿Te cuesta encontrar momentos para ti y tu bienestar personal?
            </span>
          </li>
          <li className="flex items-start gap-4">
            <SmilePlus className="text-[#9ACBD0] mt-1 min-w-[24px] min-h-[24px]" size={28} />
            <span>
              Responde este breve cuestionario para descubrir cómo el rol de cuidadora está impactando tu vida.
            </span>
          </li>
          <li className="flex items-start gap-4">
            <HeartPulse className="text-[#9ACBD0] mt-1 min-w-[24px] min-h-[24px]" size={28} />
            <span>
              Con base en tus respuestas, recibirás recomendaciones personalizadas para mejorar tu autocuidado día a día.
            </span>
          </li>
        </ul>

        <div className="pt-6">
          <button className="w-full sm:w-auto bg-[#006A71] hover:bg-[#48A6A7] text-white text-lg font-semibold py-3 px-8 rounded-2xl shadow-md transition-colors cursor-pointer">
            Inicia el cuestionario
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;