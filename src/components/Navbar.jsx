import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <nav className="max-w-7xl mx-auto px-6 py-5">

        <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg rounded-full px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">

            <img
              src="/icone-espaco-glamour.png"
              alt="Logo Espaço Glamour"
              className="w-10 h-10 object-contain"
            />

            <div>

              <h1 className="font-['Playfair_Display'] text-2xl text-[#1f1f1f] leading-none">
                Espaço Glamour
              </h1>

              <p className="text-xs tracking-[0.3em] text-[#c08b7a] uppercase mt-1">
                Beauty Studio
              </p>

            </div>

          </div>

          {/* MENU DESKTOP */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-[#1f1f1f]">

            <li>
              <a href="#" className="hover:text-[#c08b7a] transition">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-[#c08b7a] transition">
                Serviços
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-[#c08b7a] transition">
                Depoimentos
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-[#c08b7a] transition">
                Sobre
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-[#c08b7a] transition">
                Contato
              </a>
            </li>

          </ul>

          {/* BOTÃO MOBILE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-[#1f1f1f]"
          >
            ☰
          </button>

        </div>

        {/* MENU MOBILE */}
        {menuOpen && (

          <div className="md:hidden mt-4 bg-white/90 backdrop-blur-xl border border-white/40 shadow-lg rounded-3xl p-6">

            <ul className="flex flex-col gap-5 text-[#1f1f1f] font-medium">

              <li>
                <a href="#">
                  Home
                </a>
              </li>

              <li>
                <a href="#">
                  Serviços
                </a>
              </li>

              <li>
                <a href="#">
                  Depoimentos
                </a>
              </li>

              <li>
                <a href="#">
                  Sobre
                </a>
              </li>

              <li>
                <a href="#">
                  Contato
                </a>
              </li>

            </ul>

          </div>

        )}

      </nav>

    </header>
  )
}