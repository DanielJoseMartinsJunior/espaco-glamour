export default function Depoimentos() {
  return (
    <section
      id="depoimentos"
      className="min-h-screen px-6 py-24 flex items-center"
    >

      <div className="max-w-6xl mx-auto w-full text-center">

        <p className="uppercase tracking-[0.3em] text-[#c08b7a] mb-4 text-sm">
          Depoimentos
        </p>

        <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] mb-16">
          O que nossas clientes dizem
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-10 rounded-[2rem] shadow-lg">
            <p className="text-zinc-600 mb-6">
              “Atendimento impecável e ambiente maravilhoso.”
            </p>

            <h3 className="font-semibold">
              Juliana Martins
            </h3>
          </div>

          <div className="bg-white p-10 rounded-[2rem] shadow-lg">
            <p className="text-zinc-600 mb-6">
              “Me senti renovada. Simplesmente incrível.”
            </p>

            <h3 className="font-semibold">
              Fernanda Lima
            </h3>
          </div>

          <div className="bg-white p-10 rounded-[2rem] shadow-lg">
            <p className="text-zinc-600 mb-6">
              “Melhor experiência em salão que já tive.”
            </p>

            <h3 className="font-semibold">
              Camila Rocha
            </h3>
          </div>

        </div>

      </div>

    </section>
  )
}