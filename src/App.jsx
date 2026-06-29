import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Specializations from './components/Specializations';
import Services from './components/Services';
import Objectives from './components/Objectives';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Specializations />
        <Services />
        <Objectives />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
