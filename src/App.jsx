import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Servicos from "./sections/Servicos";
import Depoimentos from "./sections/Depoimentos";
import Sobre from "./sections/Sobre";
import Contato from "./sections/Contato";

export default function App() {
  return (
    <main className="bg-[#fdf8f5] text-[#1f1f1f]">

      <Navbar />

      <Hero />
      <Servicos />
      <Depoimentos />
      <Sobre />
      <Contato />

    </main>
  );
}
