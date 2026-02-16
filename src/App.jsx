import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MatrixBackground from "./components/MatrixBackground";

const App = () => {
  const [showNav, setShowNav] = React.useState(false);

  return (
    <>
      <MatrixBackground onComplete={() => setShowNav(true)} />
      <Header startTyping={showNav} />
      {showNav && <Nav />}
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
