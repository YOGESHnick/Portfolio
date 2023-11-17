// import Test from "./Test";
import "./app.scss";
// import Contact from "./components/contact/Contact";
// import Cursor from "./components/cursor/Cursor";
// import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
// import Parallax from "./components/parallax/Parallax";
// import Portfolio from "./components/portfolio/Portfolio";
// import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section >Parallax</section>
      <section>Services</section>
      <section >Parallax</section>
      <section >Portfolio 1</section>
      <section >Portfolio 2</section>
      <section >Portfolio 3</section>
      <section >Contact</section>
    </div>
  );
};

export default App;
