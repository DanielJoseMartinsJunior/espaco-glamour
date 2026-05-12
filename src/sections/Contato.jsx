export default function Contato() {
  return (
    <section
      id="contato"
      className="min-h-screen px-6 py-24 flex items-center"
    >

      <div className="max-w-4xl mx-auto w-full text-center">

        <p className="uppercase tracking-[0.3em] text-[#c08b7a] mb-4 text-sm">
          Contato
        </p>

        <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] mb-6">
          Agende seu horário
        </h2>

        <p className="text-zinc-600 text-lg mb-10">
          Entre em contato conosco pelo WhatsApp e reserve seu atendimento.
        </p>

        <a
          href="https://wa.me/5547999999999"
          target="_blank"
          className="inline-block bg-[#c08b7a] hover:bg-[#ae7867] transition text-white px-10 py-5 rounded-full font-medium shadow-lg shadow-[#c08b7a]/20"
        >
          Chamar no WhatsApp
        </a>

      </div>

    </section>
  )
}