
const Home = () => {
  return (
    <section className="min-h-screen bg-[#F2EFE7] flex items-center justify-center px-4 py-10">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12 space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006A71] text-center">
          ¡Bienvenida/o a tu espacio de autocuidado!
        </h1>
        <p className="text-[#006A71] text-base sm:text-lg">
          Sabemos que cuidar de otra persona implica mucho amor, pero también puede ser agotador.
          Esta plataforma está pensada especialmente para ti, que día a día entregas lo mejor de ti como cuidador/a.
        </p>
        <p className="text-[#006A71] text-base sm:text-lg">
          Aquí podrás conocer tu nivel de sobrecarga física y emocional a través de un breve cuestionario. 
          Según tus respuestas, recibirás recomendaciones simples y útiles para mejorar tu bienestar físico y emocional.
        </p>
        <p className="text-[#006A71] text-base sm:text-lg font-semibold text-center">
          Tú también mereces cuidarte.
        </p>
        <div className="text-center">
          <button className="bg-[#48A6A7] hover:bg-[#006A71] text-white font-bold py-3 px-6 rounded-full transition duration-300 cursor-pointer">
          ¡Comienza ahora!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
