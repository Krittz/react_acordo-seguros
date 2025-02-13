import Hero from "./components/pages/hero";
import Services from "./components/pages/services";
import BgBlur from "./components/ui/BgBlur";
import BgMov from "./components/ui/BgMov";
import Navbar from "./components/ui/Navbar";
import SectionTitle from "./components/ui/SectionTitle";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <header>
        <Navbar />
      </header>
      <main>
        <section id="hero" className="position-relative">
          <BgMov />
          <BgBlur />
          <Hero />
        </section>
        <section id="services" className="position-relative">
          <SectionTitle
            title="Serviços"
            subtitle="Oferecemos uma ampla gama de soluções em seguros e serviços financeiros, cuidadosamente elaboradas para proteger você, sua família, seus bens e sua empresa."
          />
          <Services />
        </section>
      </main>
    </div>
  );
}

export default App;
