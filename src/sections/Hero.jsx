export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 pt-32"
    >

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

        {/* TEXTO */}
        <div>

          <p className="uppercase tracking-[0.3em] text-[#c08b7a] mb-4 text-sm">
            Beleza • Estética • Autoestima
          </p>

          <h1 className="text-5xl md:text-7xl font-['Playfair_Display'] leading-tight mb-6">
            Realce sua beleza no{" "}
            <span className="text-[#c08b7a]">
              Espaço Glamour
            </span>
          </h1>

          <p className="text-zinc-600 text-lg leading-relaxed mb-8 max-w-xl">
            Um espaço pensado para elevar sua autoestima com atendimento premium,
            sofisticação e os melhores cuidados para sua beleza.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">

            <button className="bg-[#c08b7a] hover:bg-[#ae7867] transition text-white px-8 py-4 rounded-full font-medium shadow-lg shadow-[#c08b7a]/20">
              Agendar Horário
            </button>

            <button className="border border-[#c08b7a] text-[#c08b7a] hover:bg-[#c08b7a] hover:text-white transition px-8 py-4 rounded-full font-medium">
              Conhecer Serviços
            </button>

          </div>

        </div>

        {/* IMAGEM */}
        <div className="relative">

          <div className="absolute inset-0 bg-[#c08b7a]/20 blur-3xl rounded-full"></div>

          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop"
            alt="Salão de beleza"
            className="relative z-10 rounded-[2rem] shadow-2xl object-cover h-[650px] w-full"
          />

        </div>

      </div>

    </section>
  )
}