import { questionsTest } from "../data/test";
import { kinesiologicalTipsNivelBajo } from "../data/NivelBajo";
import { kinesiologicalTipsNivelMedio } from "../data/NivelMedio";
import { kinesiologicalTipsNivelAlto } from "../data/NivelAlto";
import { Sparkles, ChevronDown, Lightbulb, ChevronUp, ArrowLeft } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router";


const Test = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [points, setPoints] = useState(0);
    const [emotionalMessages, setEmotionalMessages] = useState([]);
    const [randomMessage, setRandomMessage] = useState("");
    const [tips, setTips] = useState([]);
    const [resultTitle, setResultTitle] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const navigate = useNavigate();

    const tipsRef = useRef(null);
    const topRef = useRef(null); // Ref para la primera sección

    const volver = () => {
        navigate('/home', {
            replace: true
        })
        window.scrollTo(0, 0); // Esta línea hace que el scroll se mueva a la parte superior.

    }


    const scrollToTips = () => {
        tipsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTop = () => {
        topRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleAnswer = (optionPoints) => {
        setPoints(prev => prev + optionPoints);
        setCurrentQuestion(prev => prev + 1);
    };

    const question = questionsTest[currentQuestion];

    useEffect(() => {
        if (question) return;

        let messages = [];
        let title = "";
        let resultTips = [];

        if (points <= 5) {
            title = "Estás bien, sigamos cuidándote!";
            messages = [
                "Hoy estás estable, ¡Qué bueno!",
                "Aprovecha este momento para recargarte un poquito más.",
                "Recuerda: Pequeños cuidados diarios evitan grandes cansancios."
            ];
            resultTips = [
                ...kinesiologicalTipsNivelBajo.movilidadesArticulares.cuello,
                ...kinesiologicalTipsNivelBajo.movilidadesArticulares.hombro,
                ...kinesiologicalTipsNivelBajo.movilidadesArticulares.columna,
                ...kinesiologicalTipsNivelBajo.movilidadesArticulares.cadera,
                ...kinesiologicalTipsNivelBajo.pausasActivas
            ];
        } else if (points <= 10) {
            title = "Haz una pausa, escucha tu cuerpo y mente";
            messages = [
                "Tu cuerpo y mente te están pidiendo una pausa. Escúchalo con amabilidad.",
                "Está bien detenerse un momento. Hoy, intenta darte 5 minutos solo para ti.",
                "Recuerda: El descanso no es un lujo, es parte del cuidado."
            ];
            resultTips = [
                ...kinesiologicalTipsNivelMedio.estiramientos.cabezaYCuello,
                ...kinesiologicalTipsNivelMedio.estiramientos.hombros,
                ...kinesiologicalTipsNivelMedio.estiramientos.columnaLumbar,
                ...kinesiologicalTipsNivelMedio.estiramientos.espaldaYbrazos,
                ...kinesiologicalTipsNivelMedio.pausasActivas
            ];
        } else {
            title = "Te estás sobrecargando, respira";
            messages = [
                "Hoy estás cargando mucho, permítete parar un momento.",
                "Sabemos que estás dando todo, pero tú también necesitas cuidado.",
                "No estás sola/o, tu salud también importa."
            ];
            resultTips = [
                ...kinesiologicalTipsNivelAlto.respiraciones,
                ...kinesiologicalTipsNivelAlto.movimientoActivo
            ];
        }

        setEmotionalMessages(messages);
        setResultTitle(title);
        setTips(resultTips.map(tip => ({
            tip: tip.exercise || "Ejercicio sin descripción",
            image: tip.image
        })));

        const index = Math.floor(Math.random() * messages.length);
        setRandomMessage(messages[index]);

    }, [question, points]);

    if (!question) {
        return (
            <div className="min-h-screen bg-[#F2EFE7] overflow-y-auto scroll-smooth scrollbar-hidden">
                <button
                    onClick={volver}
                    className="fixed top-4 left-4 p-2 rounded-full bg-white shadow-lg hover:bg-[#e0e0e0] transition cursor-pointer"
                    aria-label="Volver"
                >
                    <ArrowLeft className="text-[#006A71]" size={24} />
                </button>
                <section ref={topRef} className="h-screen flex flex-col items-center justify-center px-6 space-y-10 bg-[#F2EFE7]">
                    <h2 className="text-5xl md:text-6xl font-bold text-[#006A71] text-center leading-snug">
                        {resultTitle}
                    </h2>

                    <div className="w-full max-w-2xl p-10 bg-white rounded-2xl shadow-2xl flex flex-col items-center">
                        <Sparkles className="mb-4 text-[#FFC857]" size={48} />
                        <p className="text-2xl text-[#006A71] text-center font-semibold italic">
                            “{randomMessage}”
                        </p>
                    </div>


                    <div className="flex flex-col items-center mt-8 ">
                        <span className="text-[#006A71] font-semibold text-xl mb-2 animate-bounce">Recomendaciones</span>
                        <button onClick={scrollToTips} className="animate-bounce cursor-pointer">
                            <ChevronDown size={48} className="text-[#006A71]" />
                        </button>
                    </div>

                </section>

                <section ref={tipsRef} className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6">
                    <button onClick={scrollToTop} className="mt-8 animate-bounce cursor-pointer">
                        <ChevronUp size={48} className="text-[#006A71]" />
                    </button>
                    <div className="flex items-center gap-3">
                        <Lightbulb className="text-[#006A71]" size={28} />
                        <h3 className="text-2xl font-semibold text-[#006A71] text-center">
                            Recomendaciones de ejercicios
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
                        {tips
                            .slice(currentPage * 3, currentPage * 3 + 3)
                            .map((tip, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center max-w-xs mx-auto"
                                >
                                    <p className="text-[#006A71] font-medium text-xl mb-4">
                                        {tip.tip}
                                    </p>
                                    {tip.image && (
                                        <img
                                            src={tip.image}
                                            alt={`Ejercicio ${idx}`}
                                            className="w-full h-48 object-cover rounded-md mb-4"
                                        />
                                    )}
                                </div>
                            ))}
                    </div>


                    <div className="flex gap-4 mt-6">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                            disabled={currentPage === 0}
                            className="px-4 py-2 bg-[#006A71] hover:bg-[#48A6A7] text-white rounded-lg disabled:opacity-50 cursor-pointer"
                        >
                            Anterior
                        </button>
                        <button
                            onClick={() =>
                                setCurrentPage((prev) =>
                                    (prev + 1) * 3 < tips.length ? prev + 1 : prev
                                )
                            }
                            disabled={(currentPage + 1) * 3 >= tips.length}
                            className="px-4 py-2 bg-[#006A71] hover:bg-[#48A6A7] text-white rounded-lg disabled:opacity-50 cursor-pointer"
                        >
                            Siguiente
                        </button>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F2EFE7] p-6">
            <button
                onClick={volver}
                className="fixed top-4 left-4 p-2 rounded-full bg-white shadow-lg hover:bg-[#e0e0e0] transition cursor-pointer"
                aria-label="Volver"
            >
                <ArrowLeft className="text-[#006A71]" size={24} />
            </button>
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full text-center">
                <h2 className="text-3xl font-semibold text-[#006A71] mb-6">
                    Pregunta {currentQuestion + 1} de {questionsTest.length}
                </h2>
                <p className="text-xl mb-6 text-[#006A71]">{question.question}</p>

                <div className="space-y-4">
                    {question.options.map((option, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleAnswer(option.points)}
                            className="w-full bg-[#006A71] hover:bg-[#48A6A7] text-white font-medium py-3 px-6 rounded-xl text-xl transition duration-200 cursor-pointer"
                        >
                            {option.text}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Test;
