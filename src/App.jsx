import Navbar from './components/sections/Navbar.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Stats from './components/sections/Stats.jsx';
import WhyChooseUs from './components/sections/Collections.jsx';
import Products from './components/sections/Products.jsx';
import Testimonials from './components/sections/Testimonials.jsx';
import Partners from './components/sections/Partners.jsx';
import Contact from './components/sections/Contact.jsx';
import Footer from './components/sections/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <WhyChooseUs />
      <Products />
      <Testimonials />
      <Partners />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
