import { useState } from "react";
import { QuestionsFrequentlyData } from "../data/QuestionsFrequently.js";

const QuestionsFrequently = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-10 px-4 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-3xl">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#006A71] mb-10">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-4">
          {QuestionsFrequentlyData.map((item, index) => (
            <div key={index} className="border border-[#9ACBD0] rounded-lg overflow-hidden">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between px-4 py-3 bg-[#48A6A7] hover:bg-[#006A71] text-white font-medium transition duration-300"
              >
                {item.question}
                <span className="text-xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 py-3" : "max-h-0"
                } text-[#006A71] bg-[#F2EFE7]`}
              >
                {item.response}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionsFrequently;
