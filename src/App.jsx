import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Servicos from "./sections/Servicos";
import Sobre from "./sections/Sobre";
import Espaco from "./sections/Espaco";
import Galeria from "./sections/Galeria";
import Produtos from "./sections/Produtos";
import Depoimentos from "./sections/Depoimentos";
import Contato from "./sections/Contato";

export default function App() {
  return (
    <main className="bg-[#fdf8f5]">

      <Navbar />

      <Hero />
      <Servicos />
      <Sobre />
      <Espaco />
      <Galeria />
      <Produtos />
      <Depoimentos />
      <Contato />

    </main>
  );
}
