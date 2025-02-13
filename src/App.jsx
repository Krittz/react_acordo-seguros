import Hero from "./components/pages/hero";
import BgBlur from "./components/ui/BgBlur";
import BgMov from "./components/ui/BgMov";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <section id="hero" className="position-relative">
          <BgMov />
          <BgBlur />
          <Hero />
        </section>
      </main>
    </div>
  );
}

export default App;
