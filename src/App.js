import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Fade from 'react-reveal/Fade';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
