import Navbar from "./components/Navbar";
import "./App.css";
import CommandLine from "./components/CommandLine";
import Companies from "./components/Companies";
import Cta from "./components/Cta";
import Cycles from "./components/Cycles";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Integrate from "./components/Integrate";
import Interface from "./components/Interface";
import Media from "./components/Media";
import Roadmap from "./components/Roadmap";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Companies />
      <Features />
      <Interface />
      <CommandLine />
      <Cycles />
      <Roadmap />
      <Integrate />
      <Testimonial />
      <Media />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
