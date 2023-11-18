// import Test from "./Test";
import "./app.scss";
// import Contact from "./components/contact/Contact";
// import Cursor from "./components/cursor/Cursor";
// import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
// import Parallax from "./components/parallax/Parallax";
// import Portfolio from "./components/portfolio/Portfolio";
// import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Services" >Parallax</section>
      <section>Services</section>
      <section >Parallax</section>
      <section id="Portfolio" >Portfolio 1</section>
      <section >Portfolio 2</section>
      <section id="Contact">Portfolio 3</section>
      <section id="About" >Contact</section>
    </div>
  );
};

export default App;
