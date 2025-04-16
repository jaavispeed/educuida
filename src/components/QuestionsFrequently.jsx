import { useState } from "react";
import { QuestionsFrequentlyData } from "../data/QuestionsFrequently.js";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const QuestionsFrequently = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-8 sm:py-12 px-4 sm:px-6 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-[#006A71] mb-8 sm:mb-12">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-6">
          {QuestionsFrequentlyData.map((item, index) => (
            <div key={index} className="border border-[#9ACBD0] rounded-lg overflow-hidden">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between px-6 py-4 bg-[#48A6A7] hover:bg-[#006A71] text-white font-semibold text-base sm:text-xl transition duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="min-w-[24px] min-h-[24px] flex items-center justify-center">
                    <HelpCircle size={24} className="text-white flex-shrink-0" />
                  </div>
                  <span className="text-base sm:text-xl text-left">{item.question}</span>
                </div>

                <span className="text-xl sm:text-2xl font-bold">
                  {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />} {/* Icono con tamaño fijo */}
                </span>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-56 py-4" : "max-h-0"
                  } text-[#006A71] bg-[#F2EFE7]`}
              >
                <p className="text-sm sm:text-lg">{item.response}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionsFrequently;
