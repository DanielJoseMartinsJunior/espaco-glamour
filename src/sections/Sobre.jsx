export default function Sobre() {
  return (
    <section
      id="sobre"
      className="min-h-screen px-6 py-24 flex items-center"
    >

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

        <img
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop"
          alt="Sobre"
          className="rounded-[2rem] shadow-2xl h-[600px] object-cover w-full"
        />

        <div>

          <p className="uppercase tracking-[0.3em] text-[#c08b7a] mb-4 text-sm">
            Sobre nós
          </p>

          <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] mb-6">
            Elegância, cuidado e autoestima
          </h2>

          <p className="text-zinc-600 text-lg leading-relaxed">
            No Espaço Glamour acreditamos que beleza vai muito além da aparência.
            Criamos experiências únicas para elevar sua autoestima com conforto,
            sofisticação e atendimento personalizado.
          </p>

        </div>

      </div>

    </section>
  )
}