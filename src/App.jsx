import { useState, useEffect } from 'react'; // 1. Import hooks
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from './components/Services';
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App(){
  // 2. Add state for the theme
  const [theme, setTheme] = useState('dark');

  // 3. Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // 4. Use useEffect to apply the theme class to the body
  useEffect(() => {
    document.body.className = ''; // Reset classes
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    }
  }, [theme]);
  return(
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
    <main>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </main>

    
    </>
  );
}
export default App;