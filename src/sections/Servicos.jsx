export default function Servicos() {
  return (
    <section
      id="servicos"
      className="min-h-screen px-6 py-24 flex items-center"
    >

      <div className="max-w-7xl mx-auto w-full">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-[#c08b7a] mb-4 text-sm">
            Serviços
          </p>

          <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] mb-6">
            Cuidados pensados para você
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-[2rem] p-10 shadow-lg">
            <h3 className="text-2xl mb-4 font-semibold">
              Cabelo
            </h3>

            <p className="text-zinc-600">
              Cortes modernos, hidratação, coloração e tratamentos premium.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-10 shadow-lg">
            <h3 className="text-2xl mb-4 font-semibold">
              Maquiagem
            </h3>

            <p className="text-zinc-600">
              Produções elegantes para eventos especiais e dia a dia.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-10 shadow-lg">
            <h3 className="text-2xl mb-4 font-semibold">
              Estética
            </h3>

            <p className="text-zinc-600">
              Cuidados faciais e corporais com atendimento diferenciado.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}